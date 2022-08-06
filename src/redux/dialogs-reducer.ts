import {ActionType, DialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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

const dialogsReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
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