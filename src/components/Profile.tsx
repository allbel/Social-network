import React from 'react';
import css from './Profile.module.css';

function Profile() {
    return (
        <div className={css.content}>
            <div>
                <img src="http://dgdesign.ru/uploads/posts/2018-01/1517320032_shapka-sayta-gorod-56317631.jpg" alt=""/>
            </div>
            <div>ava + description</div>
            <div>
                My posts
                <div>New post</div>
                <div className={css.posts}>
                    <div className={css.item}>Post 1</div>
                    <div className={css.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;