import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}


type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={css.message}>{props.message}</div>
}



const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)


    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>)


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