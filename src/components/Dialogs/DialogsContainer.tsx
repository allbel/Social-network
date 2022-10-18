import React from 'react';
import {addMessageAС, DialogsPageType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateDialogsPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchDialogsPropsType = {
    addMessage: (message: string) => void
}

export type DialogsPropsType = MapStateDialogsPropsType & MapDispatchDialogsPropsType

const mapStateToProps = (state: StateType): MapStateDialogsPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogsPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAС(message))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)