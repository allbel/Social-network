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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'},
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
    ]

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            </div>

            <div className={css.messages}>
                <Message message={messageData[0].message}/>
                <Message message='How are you'/>
                <Message message='Yo'/>
            </div>

        </div>
    );
};

export default Dialogs;