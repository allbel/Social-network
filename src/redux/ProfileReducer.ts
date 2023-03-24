import {v1} from "uuid";
import {Dispatch} from "redux";
import {modelUpdateProfile, profileApi} from "../api/api";
import {DispatchType, StateType} from "./reduxStore";
import {setErrorMessage} from "./authReducer";
import axios from "axios";

export type postDataType = {
    id: string
    text: string
    likeCount: number
}
export type ProfilePageType = {
    logoAuthUser: string | null
    isLoading: boolean
    profileUser: ProfileUserType | null
    statusUser: string
    statusAuthUser: string
    postData: Array<postDataType>
}

export type ProfileUserType = {
    aboutMe: string | null
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}


export type actionCreatorAddPostType = ReturnType<typeof setAddPost>
export type setProfileUserType = ReturnType<typeof setProfileUser>
export type setIsLoadingType = ReturnType<typeof setIsLoading>
export type getStatusUserType = ReturnType<typeof getStatusUser>
export type updateAuthUserStatusType = ReturnType<typeof updateAuthUserStatus>
export type setUploadPhotoForUserType = ReturnType<typeof setUploadPhotoForUser>
export type setLogoAuthUserForUserType = ReturnType<typeof setLogoAuthUserForUser>
export type setUpdateUserProfileType = ReturnType<typeof setUpdateUserProfile>
export type AllActionsCreatorsProfile =
    actionCreatorAddPostType
    | setProfileUserType
    | setIsLoadingType
    | getStatusUserType
    | updateAuthUserStatusType
    | setUploadPhotoForUserType
    | setLogoAuthUserForUserType
    | setUpdateUserProfileType

export type termModelUpdateProfile = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    aboutMe?: string
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

}

let initialState: ProfilePageType = {
    logoAuthUser: null,
    isLoading: false,
    profileUser: null,
    statusUser: '',
    statusAuthUser: '',
    postData: [
        {id: v1(), text: 'Hello,Its my first post', likeCount: 10},
        {id: v1(), text: 'yoyoyo', likeCount: 12},
        {id: v1(), text: 'Welcome samurai!!', likeCount: 77},
    ]
}
export const ProfileReducer = (state: ProfilePageType = initialState, action: AllActionsCreatorsProfile): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                postData: [{id: v1(), text: action.post, likeCount: 0}, ...state.postData]
            }

        case "SET-PROFILE-USER": {
            return {...state, profileUser: action.profileUser}
        }
        case "SET-IS-LOADING-PROFILE": {
            return {...state, isLoading: action.status}
        }
        case "GET-STATUS-USER": {
            return {...state, statusUser: action.status}
        }
        case "UPDATE-AUTH-USER-STATUS": {
            return {...state, statusUser: action.status}
        }
        case "SET-LOGO": {
            return {...state, logoAuthUser: action.logo}
        }
        case "SET-PHOTO": {
            return {
                ...state,
                profileUser: {
                    ...state.profileUser!,
                    photos: {small: action.photoObj.small, large: action.photoObj.large}
                }
            }
        }
        case "SET-UPDATE-USER-PROFILE": {
            return {...state, profileUser: {...state.profileUser!, ...action.value}}

        }
        default:
            return state
    }

}


export const setAddPost = (post: string) => ({type: 'ADD-POST', post} as const)

export const setProfileUser = (profileUser: ProfileUserType) => {
    return {type: 'SET-PROFILE-USER', profileUser} as const
}
export const setIsLoading = (status: boolean) => {
    return {type: 'SET-IS-LOADING-PROFILE', status} as const
}
export const getStatusUser = (status: string) => {
    return {type: 'GET-STATUS-USER', status} as const
}
export const updateAuthUserStatus = (status: string) => {
    return {type: 'UPDATE-AUTH-USER-STATUS', status} as const
}
export const setUploadPhotoForUser = (photoObj: any) => {
    return {type: 'SET-PHOTO', photoObj} as const
}
export const setLogoAuthUserForUser = (logo: string) => {
    return {type: 'SET-LOGO', logo} as const
}
export const setUpdateUserProfile = (value: modelUpdateProfile) => {
    return {type: 'SET-UPDATE-USER-PROFILE', value} as const
}


export const setProfileThunkCreator = (idUserProfile: string) => async (dispatch: Dispatch, getState: () => StateType) => {
    try {
        dispatch(setIsLoading(true))
        const response = await profileApi.setProfileUser(idUserProfile)
        dispatch(setProfileUser(response))
        if (getState().auth.id === getState().profilePage.profileUser!.userId) {
            dispatch(setLogoAuthUserForUser(response!.photos.small))
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const getStatusThunkCreator = (userId: string) => async (dispatch: DispatchType) => {
    try {
        const response = await profileApi.getStatusUser(userId)
        dispatch(getStatusUser(response))
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    }
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: DispatchType) => {
    try {
        dispatch(setIsLoading(true))
        const response = await profileApi.updateStatusUser(status)
        if (response.resultCode === 0) {
            dispatch(updateAuthUserStatus(status))
        } else {
            dispatch(setErrorMessage(response.data.messages[0]))
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    } finally {
        dispatch(setIsLoading(false))
    }
}


export const uploadPhotoThunkCreator = (file: any) => async (dispatch: DispatchType) => {
    try {
        const response = await profileApi.uploadPhoto(file)
        dispatch(setUploadPhotoForUser(response.data.data.photos))

    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    }
}


export const updateProfileThunkCreator = (valueUpdated: termModelUpdateProfile | null, valueUpdatedContacts: any) => async (dispatch: DispatchType, getState: () => StateType) => {
    try {
        dispatch(setIsLoading(true))
        const profile = getState().profilePage.profileUser
        if (profile) {
            const modelUpdatedProfile: modelUpdateProfile = {
                userId: profile.userId,
                LookingForAJobDescription: profile.lookingForAJobDescription,
                fullName: profile.fullName,
                lookingForAJob: profile.lookingForAJob,
                aboutMe: profile.aboutMe,
                contacts: {
                    facebook: profile.contacts.facebook,
                    github: profile.contacts.github,
                    vk: profile.contacts.vk,
                    twitter: profile.contacts.twitter,
                    instagram: profile.contacts.instagram,
                    youtube: profile.contacts.youtube,
                    mainLink: profile.contacts.mainLink,
                    website: profile.contacts.website,
                    ...valueUpdatedContacts
                },
                ...valueUpdated
            }
            const response = await profileApi.updateProfile(modelUpdatedProfile)
            if (response.data.resultCode === 0) {
                dispatch(setUpdateUserProfile(modelUpdatedProfile))
            } else {
                dispatch(setErrorMessage(response.data.messages[0]))
            }
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            dispatch(setErrorMessage(err.message))
        }
    }finally {
        dispatch(setIsLoading(false))
    }
}
