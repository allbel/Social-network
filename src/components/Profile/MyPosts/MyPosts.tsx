import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p =>
        <Post
            id={p.id}
            message={p.message}
            likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;