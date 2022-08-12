export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

let initialState: DialogsPageType = {
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
}

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionDialogsType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newMessageText,
            }
            return {...state, newMessageText: '', messages: [...state.messages, newMessage]}
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.newMessage}
        default:
            return state
    }

}

export type ActionDialogsType =
    ReturnType<typeof addMessageActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator>

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}

export const updateNewMessageTextActionCreator = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text} as const
}

export default dialogsReducer