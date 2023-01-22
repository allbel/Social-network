import React, {ChangeEvent} from 'react';
import css from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg"

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

const ProfileInfo = ({profile, status, updateStatusProfile, isOwner, savePhoto}: ProfileInfoType) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={css.descriptionBlock}>
                <img src={profile.photos?.large || userPhoto} className={css.mainPhoto}/>
                <div><span>FullName: </span>{profile.fullName}</div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks
                    status={status}
                    updateStatusProfile={updateStatusProfile}/>
            </div>
        </div>
    );
};

export default ProfileInfo;