import React from 'react';
import css from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatusProfile: (status: string) => void
}

const ProfileInfo = ({profile, status, updateStatusProfile, ...props}: ProfileInfoType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={css.descriptionBlock}>
                {profile.photos.large && <img src={profile.photos.large}/>}
                <div><span>FullName: </span>{profile.fullName}</div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatusProfile={updateStatusProfile}/>
            </div>
        </div>
    );
};

export default ProfileInfo;