import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    getStatusProfile,
    getUserProfile,
    ProfileType,
    savePhoto, saveProfile,
    updateStatusProfile
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {IdType} from "../../redux/auth-reducer";


class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    refreshProfile() {
        let userId: string | IdType = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(String(userId))
        this.props.getStatusProfile(String(userId))
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     status={this.props.status}
                     updateStatusProfile={this.props.updateStatusProfile}
                     savePhoto={this.props.savePhoto}
            />
        );
    }
};

type MapStateProfileContainerPropsType = {
    profile: ProfileType
    status: string
    authUserId: string
    isAuth: boolean
}

type MapDispatchProfileContainerPropsType = {
    getUserProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => Promise<any>
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
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatusProfile,
        updateStatusProfile,
        savePhoto,
        saveProfile,
    }),
    withRouter,
)(ProfileContainer)