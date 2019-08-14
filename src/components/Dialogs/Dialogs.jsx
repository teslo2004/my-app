import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../Redux/dialogs-reducer'


const Dialogs = (props) =>{
let state = props.messagesPage;

let onMessageClick = () =>{
    props.sendMessage();
}

let onNewMessageChange = (e) =>{
    let body = e.target.value;
    props.updateNewMessageBody(body);
}
let newMessageBody = state.newMessageBody;

let dialogsElements=state.dialogData
                                .map(dialogData=><DialogItem name={dialogData.name} id={dialogData.id} />);
let messagesElements = state.messageData
                                .map(messageData=><Message message={messageData.message} />)

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                
                {dialogsElements}
            </div>
            <div className={classes.messages}>
               <div>{messagesElements}</div>
               <div>
                    <div><textarea value = {newMessageBody} onChange = {onNewMessageChange} placeholder = 'Enter your message'></textarea></div>
                    <div><button onClick={onMessageClick}>Send</button></div>
               </div>
                
            </div>
        </div>

    )
}

export default Dialogs;