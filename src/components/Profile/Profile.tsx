import React from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div>
                <img src="http://dgdesign.ru/uploads/posts/2018-01/1517320032_shapka-sayta-gorod-56317631.jpg" alt=""/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;