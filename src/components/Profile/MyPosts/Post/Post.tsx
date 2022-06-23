import React from 'react';
import css from './Post.module.css';

function Post() {
    return (
        <div className={css.item}>
            <img src="https://cdn.fishki.net/upload/post/201505/08/1526580/0_8af37_3d6ed850_xxl.jpg" alt=""/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;