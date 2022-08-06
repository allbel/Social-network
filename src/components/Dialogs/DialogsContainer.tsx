import React, {ChangeEvent} from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';


type DialogsPropsType = {
    // store: StoreTypeNative
}

const DialogsContainer = (props: DialogsPropsType) => {

    return (
        <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogsPage

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                const updateNewMessageText = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return <Dialogs
                    dialogsPage={state}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            }

        }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;