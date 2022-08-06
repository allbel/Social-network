import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;