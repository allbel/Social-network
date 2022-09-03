import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersDataPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type UsersCallbackPropsType = {
    onPageChanged: (currentPage: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

type UsersPropsType = UsersDataPropsType & UsersCallbackPropsType

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
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    className={s.userPhoto}
                                    src={u.photos.small ? u.photos.small : userPhoto}
                                    alt={u.name}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "4f8a82d1-a403-460a-a772-c2c60b837a88"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "4f8a82d1-a403-460a-a772-c2c60b837a88"
                                            }
                                        }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                }}>Follow</button>}
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