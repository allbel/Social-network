import {Action, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {StateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type IdType = null | number
export type EmailType = null | string
export type LoginType = null | string

type AuthType = {
    id: string
    email: EmailType
    login: LoginType
    isAuth: boolean
}

const initialState: AuthType = {
    id: '',
    email: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = 'auth/SET_USER_DATA'

const authReducer = (state = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
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

// Thunks
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: EmailType, password: string, rememberMe: boolean): AuthThunkType => async dispatch => {
    const response = await  authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
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