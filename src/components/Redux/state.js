import { rerender } from "../../rerander";



let state ={
    messagesPage:{
        dialogData:[{id:'1', name:'Alex'},
            {id:'2', name:'Elena'},
            {id:'3', name:'Dima'},
            {id:'4', name:'Andrew'},
            {id:'5', name:'Olga'}
            ],
    messageData:[{id:'0', message:'Hi!'},
            {id:'1', message:'How are you?'},
            {id:'2', message:'I am fine!'}
             ]
    },
    profilePage:{
    postMessage:[{id: '1', message:'Hi, it is my first message', likeCount:'14'},
             {id: '2', message:'Hi, how are you', likeCount:'4'},
             {id: '3', message:'I am fine!', likeCount:'7'},
             {id: '4', message:'Do not worry!', likeCount:'1'}
             ],
    newPostText: 'it-com'
            }
        }

export let addPost = (postMessage) =>{
        let newPost = {
                id: 5,
                message: postMessage,
                likeCount: 0
        };
        state.profilePage.postMessage.push(newPost);
        rerender(state);
};

export let updateNewPostText = (newText) =>{
        state.profilePage.newPostText = newText;
        rerender(state);
};

export default state;