import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {id: 1, message: 'Hi', likeCounts: 25},
        {id: 2, message: 'My first post', likeCounts: 36},
        {id: 3, message: 'My post', likeCounts: 36},
        {id: 4, message: 'My daasalkkj', likeCounts: 36},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;