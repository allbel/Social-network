import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType, termModelUpdateProfile} from "../../redux/ProfileReducer";



export type profilePropsType = {
    authUserId:number | null
    profile:ProfileUserType
    isLoading:boolean
    status:string
    updateStatusThunkCreator: (status: string) => void
    userId:string
    uploadPhotoThunkCreator:(file:any)=>void
    updateProfileThunkCreator:(value:termModelUpdateProfile)=> void
}

function Profile(props:profilePropsType) {

    let isAuthUser = false
    if (props.profile) {
        isAuthUser = props.authUserId === props.profile.userId
    }

    return (<div className={classes.profile}>
        <ProfileInfo
            updateProfileThunkCreator={props.updateProfileThunkCreator}
            isAuthUser={isAuthUser} authUserId={props.authUserId} uploadPhotoThunkCreator={props.uploadPhotoThunkCreator} status={props.status} isLoading={props.isLoading} profile={props.profile} updateStatusThunkCreator={props.updateStatusThunkCreator} userId={props.userId}/>
        {isAuthUser && <MyPostsContainer />}
    </div>)
}


export default Profile