import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {StateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type IdType = null | number
export type EmailType = null | string
export type LoginType = null | string
export type CaptchaUrlType = null | string

const initialState = {
    id: '',
    email: null as EmailType,
    login: null as LoginType,
    isAuth: false,
    captchaUrl: null as CaptchaUrlType, // if null, then captcha is not required
}

type AuthType = typeof initialState

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

const authReducer = (state = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

// Actions
export const setAuthUserData = (id: IdType, email: EmailType, login: LoginType, isAuth: boolean) =>
    ({
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    } as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) =>
    ({
        type: SET_USER_DATA,
        payload: {captchaUrl}
    } as const)

// Thunks
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: EmailType, password: string, rememberMe: boolean, captcha: CaptchaUrlType): AuthThunkType => async dispatch => {
    const response = await  authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = (): AuthThunkType => async dispatch => {
    const response = await  securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): AuthThunkType => async dispatch => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


type ActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>
type AuthThunkType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionType>

export default authReducer