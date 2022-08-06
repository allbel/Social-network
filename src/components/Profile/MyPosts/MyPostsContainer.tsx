import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreTypeNative} from "../../../App";
import StoreContext from '../../../StoreContext';


type MyPostsPropsType = {
    // store: StoreTypeNative
}

function MyPostsContainer(props: MyPostsPropsType) {

    return (
        <StoreContext.Consumer>
        {
            (store) => {

                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const updateNewPostText = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }

                return <MyPosts
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;