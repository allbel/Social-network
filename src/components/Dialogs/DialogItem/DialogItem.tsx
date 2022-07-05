import React from 'react';
import css from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";


export type DialogType = {
    id: number
    name: string
}

type DialogItemPropsType = DialogType

const DialogItem = (props: DialogItemPropsType) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;