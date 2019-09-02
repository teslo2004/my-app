const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
                    newPostText: 'it-com',
                    profile: null

};
const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                postMessage: [...state.postMessage, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () =>({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const setUserProfile = (profile) =>({
    type: SET_USER_PROFILE, profile
})


export default profileReducer;