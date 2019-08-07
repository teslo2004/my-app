let store = {
        _state: {
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
                        messageData: [{
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
                        ]
                },
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
                }
        },
        getStore(){
                return this._state;
        },
        _callSubscriber() {
                console.log('State was changed');
        },
        addPost(){
                let newPost = {
                        id: 5,
                        message: this._state.profilePage.newPostText,
                        likeCount: 0
                };
                this._state.profilePage.postMessage.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);

        },
        updateNewPostText(newText){
                this._state.profilePage.newPostText = newText;
                this._callSubscriber(this._state);
        },
        subscribe(observer){
                this._callSubscriber = observer;
        }
}


window.store = store;
export default store;