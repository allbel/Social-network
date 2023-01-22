import {PhotoType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

type ContactsType = {
    facebook: string
    website: null | string
    vk: string
    twitter: string
    instagram: string
    youtube: null | string
    github: string
    mainLink: null | string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi', likeCounts: 25},
        {id: 2, message: 'My first post', likeCounts: 36},
        {id: 3, message: 'My post', likeCounts: 36},
        {id: 4, message: 'My daas', likeCounts: 36},
    ] as Array<PostType>,
    profile: {} as ProfileType,
    status: ''
}

type ProfilePageType = typeof initialState

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.text,
                likeCounts: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case SET_STATUS_PROFILE:
            return {...state, status: action.status}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export type ActionProfileType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatusProfile> |
    ReturnType<typeof deletePostAC> |
    ReturnType<typeof savePhotoSuccessAC>

export const addPostAC = (text: string) => {
    return {type: ADD_POST, text} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const setStatusProfile = (status: string) => {
    return {type: SET_STATUS_PROFILE, status} as const
}

export const deletePostAC = (id: number) => {
    return {type: DELETE_POST, id} as const
}

export const savePhotoSuccessAC = (photos: any) => {
    return {type: SAVE_PHOTO_SUCCESS, photos} as const
}

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatusProfile = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data))
}

export const updateStatusProfile = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusProfile(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos))
    }
}

export default profileReducer