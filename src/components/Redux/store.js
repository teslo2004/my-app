import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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
                this._state.profilePage = profileReducer(this._state.profilePage, action);
                this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
                this._callSubscriber(this._state);
        }
}

window.store = store;
export default store;