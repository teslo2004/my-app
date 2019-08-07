let rerenderTree = () =>{
        console.log('State was changed')
}
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

export const addPost = (postMessage) =>{
        let newPost = {
                id: 5,
                message: postMessage,
                likeCount: 0
        };
        state.profilePage.postMessage.push(newPost);
        rerenderTree(state);
        
};

export const updateNewPostText = (newText) =>{
        state.profilePage.newPostText = newText;
        rerenderTree(state);
};

export const subscribe = (observer) =>{
        rerenderTree = observer;
}
export default state;