import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


type MapStateUsersPropsType = {
    users: Array<UserType>
}

type MapDispatchUsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers:  (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateUsersPropsType & MapDispatchUsersPropsType

const mapStateToProps = (state: StateType): MapStateUsersPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchUsersPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers:  (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);