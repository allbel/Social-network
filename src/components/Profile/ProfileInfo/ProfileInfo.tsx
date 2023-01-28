import React, {ChangeEvent, useState} from 'react';
import css from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg"
import {ProfileDataFormReduxForm} from "./ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo = ({profile, status, updateStatusProfile, isOwner, savePhoto, saveProfile}: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
            .then(() => setEditMode(false))
    }

    return (
        <div>
            <div className={css.descriptionBlock}>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatusProfile={updateStatusProfile}/>
                <img src={profile.photos?.large || userPhoto} className={css.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode
                    // ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} />
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} /> }
            </div>
        </div>
    );
};

type KeyContactsType = 'facebook' | 'website' | 'vk' | 'twitter' | 'instagram' | 'youtube' | 'github' | 'mainLink'

const ProfileData = ({profile, isOwner, goToEditMode}: {profile: ProfileType; isOwner: boolean; goToEditMode: () => void}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            { profile.lookingForAJob &&
              <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
              </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {profile.contacts && Object.keys(profile.contacts).map(key => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key as KeyContactsType]}
                />
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}: {contactTitle: string, contactValue: string | null}) => {
    return <div className={css.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;