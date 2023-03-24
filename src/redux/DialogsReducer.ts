import {v1} from "uuid";
import avatar from "../assets/images/avatar.png";

export type dialogsDataType = {
    id: string
    user: {
        avatar:string
        name:string
    },
    message:{
        text:string
        time:string
    }
}
export type messagesDataType = {
    id: string
    messages: string
}
export type DialogPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type actionCreatorAddMessagesType = ReturnType<typeof actionCreatorAddMessages>
export type setMyMessageType = ReturnType<typeof setMessage>
export type AllActionsCreatorsTypeDialogs =  actionCreatorAddMessagesType | setMyMessageType

let initialState = {
    dialogsData: [
        {id: v1(),
            user: {
            avatar: avatar,
                name: 'Friend'
            },
            message: {
            text: 'Hello my friend', time: '22:00',
            },
        },  {id: v1(),
            user: {
                avatar: avatar,
                name: 'My'
            },
            message: {
                text: 'Hello Bobick', time: '22:00',
            },
        }
    ] as Array<dialogsDataType>,
    messagesData: [
        {id: v1(), messages: 'Hi Samurai'},
        {id: v1(), messages: 'YO YO'},
        {id: v1(), messages: 'What are you doing?'},
        {id: v1(), messages: 'Im sleep :))'},
        {id: v1(), messages: 'Hello samurai'}
    ] as Array<messagesDataType>,
}
export type initialStateType = typeof initialState


export const DialogsReducer = (state: initialStateType = initialState, action: AllActionsCreatorsTypeDialogs): DialogPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':{
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), messages: action.messages}]
            }
        }

        case 'SET-MESSAGE':{
            return {...state,dialogsData:[...state.dialogsData,{id:v1(),user:{avatar,name:action.whoseMessage},message:{text:action.myMessage,time:'20:00'}}]}
        }
        default:
            return state

    }

}


export const actionCreatorAddMessages = (messages:string) => ({type: "ADD-MESSAGE",messages}as const)

export const setMessage = (myMessage:string,whoseMessage:'My' | 'Friend') => ({type: "SET-MESSAGE",myMessage,whoseMessage}as const)


