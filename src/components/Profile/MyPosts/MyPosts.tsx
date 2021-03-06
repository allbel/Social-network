import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p =>
        <Post
            id={p.id}
            message={p.message}
            likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value as string
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;