import profileReducer, {ActionProfileType} from "./profile-reducer";
import dialogsReducer, {ActionDialogsType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: object
}

export type StoreType = {
    _state: StateType
    _callSubsсriber: () => void
    getState: () => StateType
    subsсribe: (observer: () => void) => void

    addMessage: () => void
    updateNewMessageText: (newMessge: string) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = ActionProfileType | ActionDialogsType

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likeCounts: 25},
                {id: 2, message: 'My first post', likeCounts: 36},
                {id: 3, message: 'My post', likeCounts: 36},
                {id: 4, message: 'My daas', likeCounts: 36},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubsсriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subsсribe(observer) {
        this._callSubsсriber = observer;
    },

    addMessage() {
        const newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubsсriber()
    },
    updateNewMessageText(newMessge) {
        this._state.dialogsPage.newMessageText = newMessge
        this._callSubsсriber()
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubsсriber()
    }
}

export default store