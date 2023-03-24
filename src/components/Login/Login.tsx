import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../redux/authReducer";
import {Input} from "../../common/FormsControls/FormsControls";
import {requaredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/reduxStore";
import classes from './Login.module.css'

export type FormDataTypeLogin = {
    login:string
    password:string
    rememberMe:boolean
}
export const LoginForm = (props:InjectedFormProps<FormDataTypeLogin>) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'}  type="text" placeholder={'email'} component={Input} validate={[requaredField]}/></div>
            <div><Field name={'password'} type="password" placeholder={'password'} component={Input} validate={[requaredField]}/></div>
            <div><Field name={'rememberMe'} type="checkbox" component={Input} validate={[requaredField]}/> remember me</div>
            {props.error && <div className={classes.errorSubmit}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>

    )
}

const LoginFormContainer = reduxForm<FormDataTypeLogin>({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props:LoginPropsType) => {

    const onSubmit = (formData:FormDataTypeLogin) => {
        props.AuthorizeUserThunkCreator(formData)
    }
    if(props.isAuth){
        return <Redirect to={'profile/'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={onSubmit}/>
        </div>
    );
};
type mapStateToPropsType = {
    isAuth:boolean
}
type mapDispatchToPropsType = {
    AuthorizeUserThunkCreator:(dataForm:FormDataTypeLogin)=>void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
     isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps,{AuthorizeUserThunkCreator: loginUserThunkCreator})(Login)
