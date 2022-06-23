import React from 'react';
import css from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={css.nav}>
            <div className={`${css.item} ${css.active}`}>
                <a href="">Profile</a>
            </div>
            <div className={css.item}>
                <a href="">Messages</a>
            </div>
            <div className={css.item}>
                <a href="">News</a>
            </div>
            <div className={css.item}>
                <a href="">Music</a>
            </div>
            <div className={css.item}>
                <a href="">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;