import React, {ReactNode} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";


type ProfilePropsType = ProfileContainerPropsType & {
    children?: ReactNode;
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;