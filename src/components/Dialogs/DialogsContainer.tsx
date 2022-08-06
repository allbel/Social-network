import React, {ChangeEvent} from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {StoreTypeNative} from "../../App";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: StoreTypeNative
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const updateNewMessageText = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs
            dialogsPage={state}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
        />
    );
};

export default DialogsContainer;