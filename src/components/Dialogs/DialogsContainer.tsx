import React from 'react';
import {addMessageActionCreator, DialogsPageType, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateDialogsPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchDialogsPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStateDialogsPropsType & MapDispatchDialogsPropsType

const mapStateToProps = (state: StateType): MapStateDialogsPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogsPropsType => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;