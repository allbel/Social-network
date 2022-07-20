import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    newMessageText: string
    updateNewMessageText: (newMessge: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    let refToTextarea = React.createRef<HTMLTextAreaElement>()

    const onChangeMessage = () => {
        let text = refToTextarea.current?.value
        props.updateNewMessageText(text as string)
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
                    <button onClick={props.addMessage}>Add</button>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;