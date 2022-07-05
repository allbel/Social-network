import React from 'react';
import css from '../Dialogs.module.css';


export type MessageType = {
    id: number
    message: string
}

type MessagePropsType = MessageType

const Message = (props: MessagePropsType) => {
    return <div className={css.message}>{props.message}</div>
}

export default Message;