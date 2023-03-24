import React from "react";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../redux/reduxStore";
import {postDataType, setAddPost} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";


export type mapStateToPropsType = {
    posts:Array<postDataType>
    photoUser: string | undefined
}
export type mapDispatchToProps = {
    addPost:(post:string)=> void
}

const mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        posts: state.profilePage.postData,
        photoUser: state.profilePage.profileUser?.photos.large
    }
}

const mapDispatchToProps = (dispatch: DispatchType):mapDispatchToProps => {
    return {
        addPost: (post:string) => dispatch(setAddPost(post))
    }
}



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


