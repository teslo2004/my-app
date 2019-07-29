


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
             ]
            }
        }

export let addPost = (postMessage) =>{
        let newPost = {
                id: 5,
                message: 'Good!',
                likeCount: 100
        };
        state.profilePage.postMessage.push(newPost);
};

export default state;