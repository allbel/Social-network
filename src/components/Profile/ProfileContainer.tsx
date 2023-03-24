import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    ProfileUserType,
    setProfileThunkCreator,
    termModelUpdateProfile,
    updateProfileThunkCreator,
    updateStatusThunkCreator,
    uploadPhotoThunkCreator
} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type BookDetailProps = RouteComponentProps<WithRouteType>;
export type WithRouteType = {
    userId: string
}
export type mapStateToPropsType = {
    authUserId: number | null
    profile: ProfileUserType | null
    isLoading: boolean
    status: string
}
export type mapDispatchToPropsType = {
    setProfileThunkCreator: (params: string) => void
    getStatusThunkCreator: (id: string) => void
    updateStatusThunkCreator: () => void
    uploadPhotoThunkCreator: (file: any) => void
    updateProfileThunkCreator: (value: termModelUpdateProfile) => void
}

export type ProfileContainerApiType = mapStateToPropsType & mapDispatchToPropsType & BookDetailProps


class ProfileContainerApi extends React.Component<ProfileContainerApiType, StateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authUserId) {
            userId = String(this.props.authUserId)
        }
        this.props.setProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerApiType>, prevState: Readonly<StateType>, snapshot?: any) {
        let userId = this.props.match.params.userId
        if (this.props.profile !== null) {
            document.title = this.props.profile.fullName
        }
        if (prevProps.match.params.userId !== this.props.match.params.userId && this.props.match.params.userId) {
            this.props.setProfileThunkCreator(this.props.match.params.userId)
            this.props.getStatusThunkCreator(this.props.match.params.userId)
        }
    }

    componentWillUnmount() {
        document.title = 'Social network'
    }

    render() {
        return <div>
            <Profile
                updateProfileThunkCreator={this.props.updateProfileThunkCreator}
                authUserId={this.props.authUserId}
                profile={this.props.profile!}
                isLoading={this.props.isLoading}
                status={this.props.status}
                updateStatusThunkCreator={this.props.updateStatusThunkCreator}
                userId={this.props.match.params.userId}
                uploadPhotoThunkCreator={this.props.uploadPhotoThunkCreator}

            />

        </div>
    }


}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    authUserId: state.auth.id,
    profile: state.profilePage.profileUser,
    isLoading: state.profilePage.isLoading,
    status: state.profilePage.statusUser,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setProfileThunkCreator,
        getStatusThunkCreator,
        updateStatusThunkCreator,
        uploadPhotoThunkCreator,
        updateProfileThunkCreator
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainerApi)



