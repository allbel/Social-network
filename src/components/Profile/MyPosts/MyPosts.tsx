import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let postsData = [
        {id: 1, message: 'Hi', likeCounts: 25},
        {id: 2, message: 'My first post', likeCounts: 36},
    ]

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message='My first post' likeCounts={36}/>
            </div>
        </div>
    );
};

export default MyPosts;