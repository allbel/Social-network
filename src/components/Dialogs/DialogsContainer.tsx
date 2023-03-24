import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DispatchType, StateType} from "../../redux/reduxStore";
import {
    actionCreatorAddMessages,
    dialogsDataType,
    messagesDataType
} from "../../redux/DialogsReducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";


export type mapStateToPropsType = {
    messagesData: messagesDataType[]
    dialogsData: dialogsDataType[]
}

export type mapDispatchToPropsType = {
    AddMessages: (message:string) => void
}


const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        messagesData: state.dialogPage.messagesData,
        dialogsData: state.dialogPage.dialogsData,
    }
}
const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        AddMessages: (message:string) => dispatch(actionCreatorAddMessages(message))
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)



