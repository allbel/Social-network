import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p =>
        <Post
            id={p.id}
            message={p.message}
            likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value as string
        props.updateNewPostText(text)
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;