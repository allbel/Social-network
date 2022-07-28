import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    let refToTextarea = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }

    const onChangeMessage = () => {
        let text = refToTextarea.current?.value as string
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text})
    }

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={css.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onChangeMessage} ref={refToTextarea} value={props.newMessageText}></textarea>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;