const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

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

};
const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.postMessage.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export let addPostActionCreator = () =>({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profileReducer;