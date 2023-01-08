import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UsersPageType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (currentPage: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


type MapStateUsersPropsType = UsersPageType

type MapDispatchUsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersAPIComponentPropsType = MapStateUsersPropsType & MapDispatchUsersPropsType

const mapStateToProps = (state: StateType): MapStateUsersPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchUsersPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//             getUsersThunkCreator: (currentPage: number, pageSize: number) => {
//                 dispatch(getUsersThunkCreator(currentPage, pageSize))
//             }
//     }
// }

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, requestUsers
    }),
    // withAuthRedirect
)(UsersContainer)