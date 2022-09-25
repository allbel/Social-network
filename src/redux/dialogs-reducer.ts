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
    // newMessageText: string
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
    // newMessageText: ''
}

const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionDialogsType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                message: action.message,
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }

}

export type ActionDialogsType = ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (message: string) => {
    return {type: ADD_MESSAGE, message} as const
}

export default dialogsReducer