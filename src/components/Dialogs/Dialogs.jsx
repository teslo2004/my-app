import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const Dialogs = (props) =>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div classes={classes.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={classes.activeLink}>Alex</NavLink>
                </div>
                <div classes={classes.dialog}>
                <NavLink to='/dialogs/2' activeClassName={classes.activeLink}>Elena</NavLink>
                </div>
                <div classes={classes.dialog}>
                <NavLink to='/dialogs/3' activeClassName={classes.activeLink}>Dima</NavLink>
                </div>
                <div classes={classes.dialog}>
                <NavLink to='/dialogs/4' activeClassName={classes.activeLink}>Andrew</NavLink>
                </div>
                <div classes={classes.dialog}>
                <NavLink to='/dialogs/5' activeClassName={classes.activeLink}>Olga</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>I am fine!</div>
            </div>
        </div>

    )
}

export default Dialogs;