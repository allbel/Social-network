import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreTypeNative} from "../../App";


type ProfilePropsType = {
    // store: StoreTypeNative
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    );
};

export default Profile;