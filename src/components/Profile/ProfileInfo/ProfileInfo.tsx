import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://dgdesign.ru/uploads/posts/2018-01/1517320032_shapka-sayta-gorod-56317631.jpg" alt=""/>
            </div>
            <div className={css.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;