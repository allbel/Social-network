import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import userPhotoDefault from "../../../assets/images/user.png";
import React from "react";
import {followThunkCreator, unFollowThunkCreator, UserType} from "../../../redux/UsersReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, StateType} from "../../../redux/reduxStore";

type UserTypeProps = {
    user: UserType
}

export const User: React.FC<UserTypeProps> = ({user,}) => {

    const arrayUsersIdForDisabledButton = useSelector<StateType,Array<string>>(state => state.userPage.arrayUsersIdForDisabledButton)

    const dispatch = useDispatch<AppDispatch>()

    const unFollowHandler = (id:string) => {
      dispatch(unFollowThunkCreator(id))
    }
    const FollowHandler = (id:string) => {
        dispatch(followThunkCreator(id))
    }

    return (
        <div className={s.userInfo}>
        <NavLink to={'/profile/' + user.id}>
            <img className={s.Img} src={user.photos.small !== null ? user.photos.small : userPhotoDefault}
            />
        </NavLink>
        <div>{user.name}</div>
        <div className={s.status}>{user.status}</div>
        <div>{user.followed}</div>
        {user.followed ?
            <button
                className={s.buttonFollowUnfollow}
                disabled={arrayUsersIdForDisabledButton.some(el => el === user.id)}
                onClick={() => {
                    unFollowHandler(user.id)
                }}>{'unFollow'}
            </button> :
            <button className={s.buttonFollowUnfollow}
                    disabled={arrayUsersIdForDisabledButton.some(id => id === user.id)}
                    onClick={() => {
                        FollowHandler(user.id)
                    }}>{'Follow'}
            </button>}
    </div>)
}