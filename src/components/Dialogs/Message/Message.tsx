import React from 'react';
import css from '../Dialogs.module.css';
import {MessageType} from "../../../redux/store";


type MessagePropsType = MessageType

const Message = (props: MessagePropsType) => {
    return <div className={css.message}>{props.message}</div>
}

export default Message;