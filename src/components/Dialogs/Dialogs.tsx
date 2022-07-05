import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d =><DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)

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