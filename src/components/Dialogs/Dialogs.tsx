import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path}>{props.name}</NavLink>
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
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>

                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Sasha' id='3'/>
                <DialogItem name='Viktor' id='4'/>
                <DialogItem name='Valera' id='5'/>

            </div>
            <div className={css.messages}>
                <Message message='Hi' />
                <Message message='How are you' />
                <Message message='Yo' />
            </div>
        </div>
    );
};

export default Dialogs;