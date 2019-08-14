const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogData: [{
        id: '1',
        name: 'Alex'
    },
        {
            id: '2',
            name: 'Elena'
        },
        {
            id: '3',
            name: 'Dima'
        },
        {
            id: '4',
            name: 'Andrew'
        },
        {
            id: '5',
            name: 'Olga'
        }
    ],
    messageData: [
        {
            id: '0',
            message: 'Hi!'
        },
        {
            id: '1',
            message: 'How are you?'
        },
        {
            id: '2',
            message: 'I am fine!'
        }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}
export let sendMessageCreator = () =>({
    type: SEND_MESSAGE
})

export let updateNewMessageBodyCreator = (body) =>({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})


export default dialogsReducer;