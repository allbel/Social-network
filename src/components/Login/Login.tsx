import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {EmailType, login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'email'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={'password'} type={'password'} placeholder={'Password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            {props.error && <div className={'formSummaryError'}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = MapSateToPropsType & MapDispatchToPropsType

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type MapSateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (email: EmailType, password: string, rememberMe: boolean) => void
}

const mapSateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapSateToProps, {login})(Login);