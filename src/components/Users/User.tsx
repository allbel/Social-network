import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {followingInProgressType, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    followingInProgress: followingInProgressType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const User = ({user, followingInProgress, unfollow, follow}: UserPropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            className={s.userPhoto}
                            src={user.photos.small ? user.photos.small : userPhoto}
                            alt={user.name}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}
                        >Unfollow</button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}
                        >Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
};

export default User;