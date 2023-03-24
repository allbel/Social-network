import classes from './Header.module.css'
import {Link, NavLink} from "react-router-dom";
import {ProfileUserType} from "../../redux/ProfileReducer";
import Logo from './../../assets/images/Logo.png'


type headerTypeProps = {
    isAuth: boolean
    login: string | null
    profile: ProfileUserType | null
    loginOutUserThunkCreator: () => void
    logoAuthUser: string | null
    idAuthUser: number | null
}

function Header(props: headerTypeProps) {

    const onClickHandlerLogOut = () => {
        props.loginOutUserThunkCreator()
    }

    // const onClickHandlerAuthUser = () => {
    //     // console.log('1');
    //     // return <Redirect to={'/'}/>
    //   location.href  = 'profile/'
    // }

    return (<div className={classes.header}>
        <img className={classes.logoApp} src={Logo} alt={'Logo'}/>
        {props.isAuth ?
            <div className={classes.profileAuthData}>
                <Link to={`/profile/${props.idAuthUser}`}>
                    <label className={classes.label}>
                        {/*<img className={classes.smallLogoAvatar} src={props.logoAuthUser!} alt="Photo"/>*/}
                        <div className={classes.loginText}>{props.login}</div>
                    </label>
                </Link>
                <div className={classes.btnLogout}>
                    <button onClick={onClickHandlerLogOut}>Log out</button>

                </div>
            </div>
            :
            <NavLink className={classes.loginText} to={'/login'}>Login</NavLink>}
    </div>)

}


export default Header