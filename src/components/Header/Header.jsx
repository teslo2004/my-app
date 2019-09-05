import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={classes.header}>

            <img src='https://www.smartbonny.com/wp-content/uploads/2019/05/logo-ash-7.png' alt='header' />

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>
                    Login
                </NavLink>
                }
            </div>
        </header>)
}
export default Header; 