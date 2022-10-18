import {Action, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {StateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type IdType = null | number
export type EmailType = null | string
export type LoginType = null | string

type AuthType = {
    id: IdType
    email: EmailType
    login: LoginType
    isAuth: boolean
}

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = 'SET_USER_DATA'

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
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: EmailType, password: string, rememberMe: boolean): AuthThunkType => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


type ActionType = ReturnType<typeof setAuthUserData>
type AuthThunkType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionType>

export default authReducer