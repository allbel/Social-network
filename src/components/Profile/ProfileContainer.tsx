import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getStatusProfile, getUserProfile, ProfileType, updateStatusProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {IdType} from "../../redux/auth-reducer";


class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.userId)
        }
        this.props.getUserProfile(userId)
        this.props.getStatusProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     status={this.props.status}
                     updateStatusProfile={this.props.updateStatusProfile}/>
        );
    }
};

type MapStateProfileContainerPropsType = {
    profile: ProfileType
    status: string
    userId: IdType
    isAuth: boolean
}

type MapDispatchProfileContainerPropsType = {
    getUserProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type ProfileContainerConnectPropsType =
    MapStateProfileContainerPropsType & MapDispatchProfileContainerPropsType

export type ProfileContainerPropsType =
    RouteComponentProps<PathParamsType> & ProfileContainerConnectPropsType

const mapStateToProps = (state: StateType): MapStateProfileContainerPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatusProfile,
        updateStatusProfile
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)