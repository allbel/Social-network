import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                New post
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;