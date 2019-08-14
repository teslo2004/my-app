import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../Redux/dialogs-reducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) =>{
let state = props.store.getState().messagesPage;

let onMessageClick = () =>{
    props.store.dispatch(sendMessageCreator())
}

let onNewMessageChange = (body) =>{
     props.store.dispatch(updateNewMessageBodyCreator(body))
}

    return(
        <Dialogs updateNewMessageBody={onNewMessageChange}
        sendMessage={onMessageClick}
        messagesPage={state}/>
    )
}

export default DialogsContainer;