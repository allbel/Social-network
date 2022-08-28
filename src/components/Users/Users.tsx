import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'
import {setCurrentPageAC} from "../../redux/users-reducer";

class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

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
                                className={this.props.currentPage === p ? s.selectedPage : undefined}
                                onClick={() => this.onPageChanged(p)}
                            >{p}</span>
                        )})}
                </div>
                {this.props.users.map(u =>
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
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }
}

export default Users;