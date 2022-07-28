import {ActionType, DialogsPageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {

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