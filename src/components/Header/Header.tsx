import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

type HeaderPropsType = HeaderContainerPropsType

function Header(props: HeaderPropsType) {
    return (
        <header className={css.header}>
            <img src="https://i.pinimg.com/originals/23/80/0b/23800b995292379883a15d9a4c382b22.png" alt=""/>
            <div className={css.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;