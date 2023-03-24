import React from 'react';
import {connect} from "react-redux";
import {loginUserThunkCreator, setErrorMessage} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/reduxStore";
import {Alert, Button, Checkbox, Form, Input} from 'antd';
import classes from './LoginAndDesign.module.css'


export type LoginType = {
    loginUserThunkCreator: (dataForm: any) => void
    captcha:string
}
export const LoginForm2 = (props: LoginType) => {

    const onFinish = (values: any) => {
        props.loginUserThunkCreator(values)
    };

    return (
        <div className={classes.form}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                {props.captcha && <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <img  style={{width:'200px',height:'100px',marginBottom:'20px'}} src={props.captcha} alt=""/>
                    <Form.Item
                        label="Captcha"
                        name="captcha"
                        rules={[{required: true, message: 'Please input captcha'}]}
                    >
                        <Input/>
                    </Form.Item>
                </div>}

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}


const LoginAntDesign = (props: LoginPropsType) => {

    if (props.isAuth) {
        return <Redirect to={'profile/'}/>
    }
    return (
        <div className={classes.content}>
            <div className={classes.textTestAccount}>

                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}> here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p><strong className={classes.boltText}>Email: free@samuraijs.com</strong></p>
                <p><strong className={classes.boltText}>Password: free</strong></p>
            </div>
            <LoginForm2
                loginUserThunkCreator={props.loginUserThunkCreator}
                captcha={props.captcha}
            />
            {props.errorMessages && <Alert
                style={{alignSelf: 'center'}}
                description={props.errorMessages}
                type="error"
                showIcon
                closable
                className='alert'
            />}
        </div>
    );
};
type mapStateToPropsType = {
    isAuth: boolean
    errorMessages: null | string
    captcha:string
}
type mapDispatchToPropsType = {
    loginUserThunkCreator: (dataForm: any) => void
    setError: (message: string | null) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        errorMessages: state.auth.errorMessages,
        captcha:state.auth.urlCaptcha
    }
}
// @ts-ignore
export default connect(mapStateToProps, {loginUserThunkCreator, setError: setErrorMessage})(LoginAntDesign)
