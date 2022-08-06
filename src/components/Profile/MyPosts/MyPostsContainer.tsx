import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreTypeNative} from "../../../App";


type MyPostsPropsType = {
    store: StoreTypeNative
}

function MyPostsContainer(props: MyPostsPropsType) {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const updateNewPostText = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    );
};

export default MyPostsContainer;