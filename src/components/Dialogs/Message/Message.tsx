import React from 'react'
import styleMy from './Message.module.css'
import styleFriend from './FriendMessage.module.css'
import {dialogsDataType} from "../../../redux/DialogsReducer";


export type MessagePropsType = {
    message:Array<dialogsDataType>
}

const Message = (props: MessagePropsType) => {


    return (
        <>
            {props.message.map(message => {

                const my = message.user.name === 'My'

                return (
                    <div key={message.id} className={my ? styleMy.message : styleFriend.friendsMessage}>
                        <div className={my ? styleMy.myMessage : styleFriend.friendMessage}>
                            <img
                                src={message.user.avatar}
                            />
                            <div className={my ? styleMy.text : styleFriend.friendText}>
                                <div className={my ? styleMy.name : styleFriend.friendName}>
                                    {message.user.name}
                                </div>
                                <div className={my ? styleMy.messageText : styleFriend.friendMessageText}>
                                    {message.message.text}
                                </div>
                            </div>
                        </div>
                        <div className={my ? styleMy.time : styleFriend.friendTime}>
                            <div className={my ? styleMy.timeContainer : styleFriend.timeContainer}>{message.message.time}
                            </div>

                        </div>

                    </div>
                )
                })

            }
        </>
    )
}

export default Message
