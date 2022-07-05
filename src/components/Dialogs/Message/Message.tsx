import React from 'react';
import css from '../Dialogs.module.css';


export type MessageType = {
    message: string
}

type MessagePropsType = MessageType

const Message = (props: MessagePropsType) => {
    return <div className={css.message}>{props.message}</div>
}

export default Message;