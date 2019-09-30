import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../Redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
            }
        }
    }


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs);