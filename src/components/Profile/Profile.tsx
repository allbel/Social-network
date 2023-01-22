import React, {ReactNode} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";


type ProfilePropsType = ProfileContainerPropsType & {
    children?: ReactNode
    isOwner: boolean
    savePhoto: (file: any) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusProfile={props.updateStatusProfile}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;