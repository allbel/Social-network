import React from 'react';
import {addPostActionCreator, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateProfilePropsType = {
    posts: Array<PostType>
}

type MapDispatchProfilePropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStateProfilePropsType & MapDispatchProfilePropsType

const mapStateToProps = (state: StateType): MapStateProfilePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProfilePropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;