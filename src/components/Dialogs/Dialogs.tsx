import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

type FormDataType = {
    newMessageText: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageFrom: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageText'} placeholder={'Enter your message'}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageFromRedux = reduxForm<FormDataType>({form: "dialogAddMessageFrom"})(AddMessageFrom)

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)

    const addMessage = (values: FormDataType) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <AddMessageFromRedux onSubmit={addMessage}/>
            </div>
        </div>
    );
};


export default Dialogs;