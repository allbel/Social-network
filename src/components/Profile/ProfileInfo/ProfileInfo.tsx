import React from 'react';
import css from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatusProfile: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={css.descriptionBlock}>
                {props.profile.photos.large && <img src={props.profile.photos.large}/>}
                <div><span>FullName: </span>{props.profile.fullName}</div>
                <ProfileStatus
                    status={props.status}
                    updateStatusProfile={props.updateStatusProfile}/>
            </div>
        </div>
    );
};

export default ProfileInfo;