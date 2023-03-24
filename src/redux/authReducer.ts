import {Dispatch} from "redux";
import {headerApi} from "../api/api";
import {FormDataTypeLogin} from "../components/Login/Login";
import axios from "axios";
import {AppDispatch} from "./reduxStore";


export type authReducerStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    errorMessages: null | string
    urlCaptcha: string

}
export type setAuthUserType = ReturnType<typeof setAuthUser>
export type setErrorMessageType = ReturnType<typeof setErrorMessage>
export type setUrlCaptchaType = ReturnType<typeof setUrlCaptcha>
export type AllActionsCreatorsTypeAuth = setAuthUserType | setErrorMessageType | setUrlCaptchaType


const initialState: authReducerStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    errorMessages: null,
    urlCaptcha: ''
}


export const AuthReducer = (state: authReducerStateType = initialState, action: AllActionsCreatorsTypeAuth): authReducerStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.idUser,
                login: action.payload.login,
                isAuth: action.payload.valueIsAuth
            }
        }
        case "SET-ERROR-MESSAGE": {
            return {...state, errorMessages: action.message}
        }
        case "SET-URL-CAPTCHA":{
            return {...state,urlCaptcha:action.url}
        }
        default: {
            return state
        }
    }
};

export const setAuthUser = (idUser: number, login: string, email: string, valueIsAuth: boolean) => {
    return {type: 'SET-AUTH-USER', payload: {idUser, login, email, valueIsAuth}} as const
}
export const setErrorMessage = (message: string) => {
    return {type: 'SET-ERROR-MESSAGE', message} as const
}
export const setUrlCaptcha = (url: string) => {
    return {type: 'SET-URL-CAPTCHA', url} as const
}

export const AuthUserThunkCreator = () => async (dispatch: Dispatch) => {
    try {
        const response = await headerApi.authUser()
        if (response.resultCode === 0) {
            const {id, login, email} = response.data
            dispatch(setAuthUser(id, login, email, true))
        } else {
            dispatch(setErrorMessage(response.messages[0]))
        }

    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    }
}


export const loginUserThunkCreator = (dataForm: FormDataTypeLogin) => async (dispatch: AppDispatch) => {
    try {
        const response = await headerApi.login(dataForm)
        if (response.data.resultCode === 0) {
            await dispatch(AuthUserThunkCreator())
        } else if (response.data.resultCode === 10){
            let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(setErrorMessage(messages))
            const result = await headerApi.getCapcha()
            dispatch(setUrlCaptcha(result.data.url))
        }else {
            let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(setErrorMessage(messages))
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    }
}

export const loginOutUserThunkCreator = () => async (dispatch: Dispatch) => {
    try {
        const response = await headerApi.logOut()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser(0, '', '', false))
            dispatch(setUrlCaptcha(''))
        } else {
            dispatch(setErrorMessage(response.data.messages[0]))
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    }

}

// {"data":{"userId":25406},"messages":[],"fieldsErrors":[],"resultCode":0}