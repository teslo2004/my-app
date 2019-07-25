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

let dialogData = [{id:'1', name:'Alex'},
                  {id:'2', name:'Elena'},
                  {id:'3', name:'Dima'},
                  {id:'4', name:'Andrew'},
                  {id:'5', name:'Olga'}
                    ];

let messageData = [{id:'0', message:'Hi!'},
                   {id:'1', message:'How are you?'},
                   {id:'2', message:'I am fine!'}
                    ];

let dialogsElements=dialogData
                                .map(dialogData=><DialogItem name={dialogData.name} id={dialogData.id} />);
let messagesElements = messageData
                                .map(messageData=><Message message={messageData.message} />)

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                
            </div>
        </div>

    )
}

export default Dialogs;