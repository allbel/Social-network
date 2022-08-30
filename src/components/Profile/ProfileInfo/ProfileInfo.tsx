import React from 'react';
import css from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="http://dgdesign.ru/uploads/posts/2018-01/1517320032_shapka-sayta-gorod-56317631.jpg" alt=""/>
            </div>
            <div className={css.descriptionBlock}>
                {props.profile.photos.large && <img src={props.profile.photos.large}/>}
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;