import React, {ReactNode} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = ProfileContainerPropsType & {
    children?: ReactNode
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusProfile={props.updateStatusProfile}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;