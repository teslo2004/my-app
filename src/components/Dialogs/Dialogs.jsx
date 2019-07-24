import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) =>{
    return(
        <div classes={classes.dialog}>
            <NavLink to={'/dialogs/'+props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}
const Message =(props)=>{
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) =>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Alex' id='1' />
                <DialogItem name='Elena' id='2' />
                <DialogItem name='Dima' id='3' />
                <DialogItem name='Andrew' id='4' />
                <DialogItem name='Olga' id='5' />
                
            </div>
            <div className={classes.messages}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='I am fine!' />
                
            </div>
        </div>

    )
}

export default Dialogs;