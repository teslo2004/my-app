import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../Redux/profile-reducer';



const MyPosts = (props) => {

let postMessageElements = props.postMessage
                    .map(postMessage =><Post message={postMessage.message} likeCount={postMessage.likeCount} />);
let newPostElement = React.createRef(); 


let onAddPost = () =>{
    props.addPost();
    }


let onPostChange = ()=>{
    let text= newPostElement.current.value;
    props.updateNewPostText(text);
    }

    
     return (
        <div className={classes.postBlock}>
           <h3> My posts</h3>
      <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                    value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div >
            <div className={classes.posts}>
                {postMessageElements}
            </div>    
            </div>
        )
}

export default MyPosts;