import {StateType} from "./reduxStore";

export const getUsers = (state: StateType) => {
    return state.userPage.users
}
export const currentPage = (state: StateType) => {
    return state.userPage.currentPage
}
export const pageSizeUsers = (state: StateType) => {
    return state.userPage.pageSizeUsers
}
export const totalCountPages = (state: StateType) => {
    return state.userPage.totalUserCount
}
export const isLoading = (state: StateType) => {
    return state.userPage.isLoading
}
export const isLoadingFollowUnFollow = (state: StateType) => {
    return state.userPage.isLoadingFollowUnFollow
}
export const arrayUsersIdForDisabledButton = (state: StateType) => {
    return state.userPage.arrayUsersIdForDisabledButton
}