import React from 'react';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchProfilePropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateProfilePropsType & MapDispatchProfilePropsType

const mapStateToProps = (state: StateType): MapStateProfilePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProfilePropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;