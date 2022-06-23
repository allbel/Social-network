import React from 'react';
import css from './Post.module.css';


type PropsType = {
    message: string
    likeCounts: number
}

function Post(props: PropsType) {
    return (
        <div className={css.item}>
            <img src="https://cdn.fishki.net/upload/post/201505/08/1526580/0_8af37_3d6ed850_xxl.jpg" alt=""/>
            {props.message}
            <div>
                <span>like: {props.likeCounts}</span>
            </div>
        </div>
    );
};

export default Post;