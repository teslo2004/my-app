const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
        _state: {
                profilePage: {
                        postMessage: [{
                                        id: '1',
                                        message: 'Hi, it is my first message',
                                        likeCount: '14'
                                },
                                {
                                        id: '2',
                                        message: 'Hi, how are you',
                                        likeCount: '4'
                                },
                                {
                                        id: '3',
                                        message: 'I am fine!',
                                        likeCount: '7'
                                },
                                {
                                        id: '4',
                                        message: 'Do not worry!',
                                        likeCount: '11'
                                }
                        ],
                        newPostText: 'it-com'
                },
                messagesPage: {
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
                },
                sidebar:{}
        },
        getState(){
                return this._state;
        },
        _callSubscriber() {
                console.log('State was changed');
        },
        subscribe(observer){
                this._callSubscriber = observer;
        },
        dispatch(action){
                if (action.type === ADD_POST){
                        let newPost = {
                                id: 5,
                                message: this._state.profilePage.newPostText,
                                likeCount: 0
                        };
                        this._state.profilePage.postMessage.push(newPost);
                        this._state.profilePage.newPostText = '';
                        this._callSubscriber(this._state);
                }else if (action.type === UPDATE_NEW_POST_TEXT){
                        this._state.profilePage.newPostText = action.newText;
                        this._callSubscriber(this._state);
                }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
                        this._state.messagesPage.newMessageBody = action.body;
                        this._callSubscriber(this._state);
                }else if(action.type === SEND_MESSAGE){
                        let body = this._state.messagesPage.newMessageBody;
                        this._state.messagesPage.newMessageBody = '';
                        this._state.messagesPage.messageData.push({id: 6, message: body});
                        this._callSubscriber(this._state);
                }
        }
}

export let addPostActionCreator = () =>({
         type: ADD_POST
        })
    
export const updateNewPostTextActionCreator = (text) =>({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
export let sendMessageCreator = () =>({
         type: SEND_MESSAGE
        })

export let updateNewMessageBodyCreator = (body) =>({
         type: UPDATE_NEW_MESSAGE_BODY, body: body
        })
    



window.store = store;
export default store;