import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersPageType} from "../../redux/users-reducer";

type UsersCallbackPropsType = {
    onPageChanged: (currentPage: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

type UsersPropsType = UsersPageType & UsersCallbackPropsType

const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            className={props.currentPage === p ? s.selectedPage : undefined}
                            onClick={() => props.onPageChanged(p)}
                        >{p}</span>
                    )})}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className={s.userPhoto}
                                src={u.photos.small ? u.photos.small : userPhoto}
                                alt={u.name}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    );
};

export default Users;