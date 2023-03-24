import React from 'react'
import Message from './Message/Message'
import MessageSender from './Message-sender/MessageSender'
import s from './Dialogs.module.css'
import {useSelector} from "react-redux";
import {StateType} from "../../redux/reduxStore";
import {dialogsDataType} from "../../redux/DialogsReducer";


export const Dialogs = () => {

    const arrayMessage = useSelector<StateType,Array<dialogsDataType>>(state=> state.dialogPage.dialogsData)




    return (
        <div  className={s.mainContainer}>
            <div >
                <div className={s.messagesContainer}>
                    <Message message={arrayMessage} />
                </div>
                <MessageSender />
            </div>
        </div>
    )
}

export default Dialogs
