import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) =>{
    return(
        <div classes={classes.dialog}>
            <NavLink to={'/dialogs/'+props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;