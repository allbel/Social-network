import React, {ChangeEvent} from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, DialogsPageType, ProfilePageType, StoreType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
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
                        <textarea onChange={onChangeMessage} value={state.newMessageText}></textarea>
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