import React, {ChangeEvent} from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)

    const addMessage = () => {
        props.addMessage()
    }

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={css.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={updateNewMessageText} value={state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;