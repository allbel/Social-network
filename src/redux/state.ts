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
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubsriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subsribe: (observer: () => void) => void
    addMessage: () => void
    updateNewMessageText: (newMessge: string) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likeCounts: 25},
                {id: 2, message: 'My first post', likeCounts: 36},
                {id: 3, message: 'My post', likeCounts: 36},
                {id: 4, message: 'My daas', likeCounts: 36},
            ],
            newPostText: 'Flux Post',
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
            newMessageText: 'Flux Message'
        }
    },
    getState() {
        return this._state
    },
    _callSubsriber() {
        console.log('State changed')
    },
    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounts: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubsriber()
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubsriber()
    },
    subsribe(observer) {
        this._callSubsriber = observer;
    },
    addMessage() {
        const newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubsriber()
    },
    updateNewMessageText(newMessge) {
        this._state.dialogsPage.newMessageText = newMessge
        this._callSubsriber()
    }
}

export default store