import React from 'react';
import css from './Dialogs.module.css';
import DialogItem, {DialogType} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d =><DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={css.messages}>
                {messagesElements}
            </div>

        </div>
    );
};

export default Dialogs;