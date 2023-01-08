import React from 'react';
import {followingInProgressType, UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersDataPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: followingInProgressType
}

type UsersCallbackPropsType = {
    onPageChanged: (currentPage: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

type UsersPropsType = UsersDataPropsType & UsersCallbackPropsType

const Users = (
    {currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}: UsersPropsType
) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />

            {
                users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                )
            }
        </div>
    );
};

export default Users;