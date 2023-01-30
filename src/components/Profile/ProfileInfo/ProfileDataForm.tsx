import {ProfileType} from "../../../redux/profile-reducer";
import React from "react";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import css from './ProfileInfo.module.css';

export type ProfileDataFormPropsType = {
    profile: ProfileType
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={'formSummaryError'}>{error}</div>}
            <div>
                <b>Full name</b>:
                <div>
                    <Field component={Input}
                           name={'fullName'}
                           placeholder={'Full name'}
                           validate={[]}
                    />
                </div>
            </div>
            <div>
                <b>Looking for a job</b>:
                <div>
                    <Field component={Input}
                           name={'lookingForAJob'}
                           placeholder={''}
                           validate={[]}
                           type={'checkbox'}
                    />
                </div>
            </div>
            <div>
                <b>My professional skills</b>:
                <div>
                    <Field component={Textarea}
                           name={'lookingForAJobDescription'}
                           placeholder={'My professional skills'}
                           validate={[]}
                    />
                </div>
            </div>
            <div>
                <b>About me</b>:
                <div>
                    <Field component={Textarea}
                           name={'aboutMe'}
                           placeholder={'About Me'}
                           validate={[]}
                    />
                </div>
            </div>


            <div>
                <b>Contacts</b>: {profile.contacts && Object.keys(profile.contacts).map(key => {
                return <div key={key} className={css.contact}>
                    <b>{key}: </b>
                    <div>
                        <Field component={Input}
                               name={'contacts.' + key}
                               placeholder={key}
                               validate={[]}
                        />
                    </div>
                </div>
            })}
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)