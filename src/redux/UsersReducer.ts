import {userApi} from "../api/api";
import {Dispatch} from "redux";
import {setErrorMessage} from "./authReducer";
import axios from "axios";
import {ChangeObj} from "../utils/functionHelper/ChangeObj";

export type UserType = {
    id: string
    followed: boolean
    status: string
    photos: {
        small: null | string
        large: null | string
    }
    name: string
    location: {
        country: string
        city: string
    }
}
export type InitialStateType = typeof initialState
export type follow = ReturnType<typeof follow>
export type unFollow = ReturnType<typeof unFollow>
export type SetUserACType = ReturnType<typeof SetUser>
export  type SetPageACType = ReturnType<typeof SetPage>
export type SetUserCountACType = ReturnType<typeof SetUserCount>
export type SetLoadingACType = ReturnType<typeof SetLoading>
export type SetLoadingFollowUnFollowType = ReturnType<typeof SetLoadingFollowUnFollow>
export type SetPageSizeUsersType = ReturnType<typeof SetPageSizeUsers>

export type AllActionCreatorsTypeUser =
    follow
    | unFollow
    | SetUserACType
    | SetPageACType
    | SetUserCountACType
    | SetLoadingACType
    | SetLoadingFollowUnFollowType
    | SetPageSizeUsersType


let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSizeUsers: 5,
    totalUserCount: 0,
    isLoading: false,
    isLoadingFollowUnFollow: false,// если тру добавляем айдишку юзера в arrayUsersIdForDisabledButton, если фолс удаляем
    arrayUsersIdForDisabledButton: [] as Array<string>//айдишки юзеров на которых фоловимся и анфоловимся
    // в Users компоненте дисэйбл кнопкок фолов проверяем методом some, если хоть один айдишник этого массива равен айдишнику юзера с сервака которые на странице, это кнопка блокируется на время пендинга запроса
}


export const UsersReducer = (state: InitialStateType = initialState, action: AllActionCreatorsTypeUser): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: ChangeObj(state.users,'id',action.idUser,{followed:true}),

            }
        }
        case 'UN-FOLLOW': {
            return {
                ...state,
                users: ChangeObj(state.users,'id',action.idUser,{followed:false}),

            }
        }
        case "SET-USERS": {
            return {...state, users: [...action.users]}
        }
        case "SET-PAGE": {
            return {...state, currentPage: action.pageNumber}

        }
        case "SET-PAGE-SIZE": {
            return {...state, pageSizeUsers: action.pageSizeUsers}

        }
        case "SET-USER-COUNT": {
            return {...state, totalUserCount: action.userCount}
        }
        case "SET-LOADING": {
            return {...state, isLoading: action.status}
        }
        case "SET-LOADING-FOLLOW-UNFOLLOW": {
            return {
                ...state,
                arrayUsersIdForDisabledButton: action.status ?
                    [...state.arrayUsersIdForDisabledButton, action.idUser] :
                    state.arrayUsersIdForDisabledButton.filter(id => id !== action.idUser)

            }
        }
        default:
            return state
    }

}


export const follow = (idUser: string) => {
    return {type: 'FOLLOW', idUser} as const
}
export const unFollow = (idUser: string) => {
    return {type: 'UN-FOLLOW', idUser} as const
}
export const SetUser = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}
export const SetPage = (pageNumber: number) => {
    return {type: 'SET-PAGE', pageNumber} as const
}
export const SetUserCount = (userCount: number) => {
    return {type: 'SET-USER-COUNT', userCount} as const
}
export const SetLoading = (statusLoading: boolean) => {
    return {type: 'SET-LOADING', status: statusLoading} as const
}
export const SetPageSizeUsers = (pageSizeUsers: number) => {
    return {type: 'SET-PAGE-SIZE', pageSizeUsers} as const
}
export const SetLoadingFollowUnFollow = (status: boolean, idUser: string) => {
    return {type: 'SET-LOADING-FOLLOW-UNFOLLOW', status, idUser} as const
}
export const followThunkCreator = (userID: string) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch,userID,userApi.follow,follow)
}


export const unFollowThunkCreator = (userID: string) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch,userID,userApi.unFollow,unFollow)
}

const followUnfollowFlow = async (dispatch:Dispatch,userID:string,methodApi:any,actionCreator:any) => {
    try {
        dispatch(SetLoadingFollowUnFollow(true, userID))
        const response = await methodApi(userID)
        if (response.resultCode === 0) {
            dispatch(actionCreator(userID))
            dispatch(SetLoadingFollowUnFollow(false, userID))
        } else {
            dispatch(setErrorMessage(response.message))
        }

    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    } finally {
        dispatch(SetLoadingFollowUnFollow(false, userID))
    }
}

export const getUserThunkCreator = (pageSizeUsers: number, currentPage: number, isFriend?: boolean | null, userName?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(SetLoading(true))
        const result = await userApi.getUsers(pageSizeUsers, currentPage,userName,isFriend)
                dispatch(SetUser(result.items))
                dispatch(SetUserCount(result.totalCount))
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    } finally {
        dispatch(SetLoading(false))
    }

}

export const setPageThunkCreator = (pageSizeUsers: number, page: number,friend:boolean | null) => async (dispatch: Dispatch) => {
    try {
        dispatch(SetLoading(true))
        const response = await userApi.setPage(pageSizeUsers, page, friend)
        dispatch(SetPage(page))
        dispatch(SetUserCount(response.totalCount))
        dispatch(SetPageSizeUsers(pageSizeUsers))
        dispatch(SetUser(response.items))
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    } finally {
        dispatch(SetLoading(false))
    }
}
