import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.dialog + ' ' + css.active}>Dimych</div>
                <div className={css.dialog}>Sveta</div>
                <div className={css.dialog}>Sasha</div>
                <div className={css.dialog}>Viktor</div>
                <div className={css.dialog}>Valera</div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>How are you</div>
                <div className={css.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;