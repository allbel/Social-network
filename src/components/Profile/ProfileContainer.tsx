import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
};

type MapStateProfileContainerPropsType = {
    profile: ProfileType
}

type MapDispatchProfileContainerPropsType = {
    getUserProfile: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

type ProfileContainerConnectPropsType =
    MapStateProfileContainerPropsType & MapDispatchProfileContainerPropsType

export type ProfileContainerPropsType =
    RouteComponentProps<PathParamsType> & ProfileContainerConnectPropsType

const mapStateToProps = (state: StateType): MapStateProfileContainerPropsType => ({
    profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {
    getUserProfile
})(withUrlDataContainerComponent));