import classes from "./ProfileInfo.module.css";
import {UploadOutlined} from '@ant-design/icons';
import {ProfileUserType, termModelUpdateProfile} from "../../../redux/ProfileReducer";
import avatarTemp from './../../../assets/images/user.png'
import {StatusUser} from "./StatusUser/StatusUser";
import {Button, Spin, Upload} from "antd";
import {EditableSpan} from "../../EditableSpan/EditableSpan";


export type ProfileInfoTypeProps = {
    isAuthUser: boolean
    authUserId: number | null
    profile: ProfileUserType
    isLoading: boolean
    status: string
    updateStatusThunkCreator: (status: string) => void
    userId: string
    uploadPhotoThunkCreator: (file: any) => void
    updateProfileThunkCreator: (value: termModelUpdateProfile, valueUpdateContacts: any) => void

}

function ProfileInfo(props: ProfileInfoTypeProps) {


    const nameUser = props.profile?.fullName.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

    const changeAboutMy = (title: string) => {
        props.updateProfileThunkCreator({aboutMe: title}, null)
    }
    const changeNameHandler = (title: string) => {
        props.updateProfileThunkCreator({fullName: title}, null)
    }
    const ChangeLookingForAJobHandler = () => {
        props.updateProfileThunkCreator({lookingForAJob: !props.profile.lookingForAJob}, null)
    }

    const uploadFileHandler = (file: any) => {
        props.uploadPhotoThunkCreator(file.file.originFileObj)
    }

    if (!props.profile || props.isLoading) {
        return <div className={classes.spinAnt}><Spin  size={"large"}/></div>
    }


    const lookingForAJobDescriptionChanger = (title: string) => {
        props.updateProfileThunkCreator({lookingForAJobDescription: title}, null)
    }
    const changeContactsHandler = (keyObj: string, title: string) => {
        props.updateProfileThunkCreator({}, {[keyObj]: title})
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.mainInfoContainer}>
                <div className={classes.imgContainer}>
                    <img className={classes.img}
                         src={props.profile.photos.large ? props.profile.photos.large : avatarTemp}
                         alt={'avatar'}/>
                    <div>
                        {props.isAuthUser && props.authUserId &&
                            <Upload showUploadList={false} onChange={uploadFileHandler}>
                                <Button className={classes.buttonUploadPhoto} icon={<UploadOutlined/>}>Upload
                                    photo</Button>
                            </Upload>}
                        <StatusUser
                            isAuthUser={props.isAuthUser}
                            status={props.status}
                            updateStatusThunkCreator={props.updateStatusThunkCreator}
                            userId={props.userId}/>
                    </div>
                </div>
                <div className={classes.nameContainer}>
                    <div>
                        <h3>
                            <EditableSpan forContacts={false} title={nameUser} disable={!props.isAuthUser}
                                          changeTitle={changeNameHandler}/>
                        </h3>
                    </div>
                    <hr/>
                    <div>
                        <h4>About me:{
                                props.profile.aboutMe ?
                                    <EditableSpan
                                        forContacts={false}
                                        title={props.profile.aboutMe!}
                                        changeTitle={changeAboutMy}
                                        disable={!props.isAuthUser}/>
                                    : '---'
                        }
                        </h4>
                    </div>
                    <hr/>

                    <div
                        onClick={props.isAuthUser ? ChangeLookingForAJobHandler : () => {
                        }}>{props.profile.lookingForAJob
                        ?
                        <h4 className={props.isAuthUser ? classes.contentProfileUser : ''}>looking for a job</h4>
                        :
                        <h4 className={props.isAuthUser ? classes.contentProfileUser : ''}>not looking for a job</h4>}
                    </div>
                </div>
            </div>
            <div className={classes.contactsContainer}>
                <div>
                    <h3>looking for a job
                        description: {props.profile.lookingForAJobDescription ?
                            <EditableSpan forContacts={false} title={props.profile.lookingForAJobDescription}
                                          changeTitle={lookingForAJobDescriptionChanger} disable={!props.isAuthUser}/> :
                            <span>---</span>}</h3>
                </div>
                <hr/>
                <h3>Contacts:</h3>
                <div>
                    <h4>website: <EditableSpan forContacts={true}
                                               title={props.profile.contacts.website!}
                                               changeTitle={(title) => changeContactsHandler('website', title)}
                                               disable={!props.isAuthUser}/></h4>
                    <h4>vk: <EditableSpan forContacts={true}
                                          title={props.profile.contacts.vk!}
                                          changeTitle={(title) => changeContactsHandler('vk', title)}
                                          disable={!props.isAuthUser}/></h4>
                    <h4>youtube: <EditableSpan forContacts={true}
                                               title={props.profile.contacts.youtube!}
                                               changeTitle={(title) => changeContactsHandler('youtube', title)}
                                               disable={!props.isAuthUser}/></h4>
                    <h4>twitter: <EditableSpan forContacts={true}
                                               title={props.profile.contacts.twitter!}
                                               changeTitle={(title) => changeContactsHandler('twitter', title)}
                                               disable={!props.isAuthUser}/></h4>
                    <h4>instagram: <EditableSpan forContacts={true}
                                                 title={props.profile.contacts.instagram!}
                                                 changeTitle={(title) => changeContactsHandler('instagram', title)}
                                                 disable={!props.isAuthUser}/></h4>
                    <h4>github: <EditableSpan forContacts={true}
                                              title={props.profile.contacts.github!}
                                              changeTitle={(title) => changeContactsHandler('github', title)}
                                              disable={!props.isAuthUser}/></h4>
                    <h4>facebook: <EditableSpan forContacts={true}
                                                title={props.profile.contacts.facebook!}
                                                changeTitle={(title) => changeContactsHandler('facebook', title)}
                                                disable={!props.isAuthUser}/></h4>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo

