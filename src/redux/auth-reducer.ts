import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}


type ActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: IdType, email: EmailType, login: LoginType) =>
    ({
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer