import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {CaptchaUrlType, EmailType, login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginReduxFormPropsType = {
    captchaUrl: CaptchaUrlType
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginReduxFormPropsType> & LoginReduxFormPropsType> =
    ({
         handleSubmit, error, captchaUrl
    }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input}
                       name={'email'}
                       placeholder={'email'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       type={'password'}
                       placeholder={'Password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}
                /> remember me
            </div>
            {captchaUrl &&
                <div>
                    <img src={captchaUrl} alt="captcha"/>
                    <Field component={Input}
                         name={'captcha'}
                         placeholder={'Symbols from image'}
                         validate={[required]}
                    />
                </div>}
            {error && <div className={'formSummaryError'}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, LoginReduxFormPropsType>({form: 'login'})(LoginForm)

type LoginPropsType = MapSateToPropsType & MapDispatchToPropsType

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

type MapSateToPropsType = {
    captchaUrl: CaptchaUrlType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (email: EmailType, password: string, rememberMe: boolean, captcha: CaptchaUrlType) => void
}

const mapSateToProps = (state: StateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapSateToProps, {login})(Login);