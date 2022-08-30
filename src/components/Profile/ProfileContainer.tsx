import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";


export type ProfileContainerPropsType =
    MapStateProfileContainerPropsType & MapDispatchProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    setUserProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: StateType): MapStateProfileContainerPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);