import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

    let postMessage = [{id: '1', message:'Hi, it is my first message', likeCount:'14'},
                    {id: '2', message:'Hi, how are you', likeCount:'4'},
                    {id: '3', message:'I am fine!', likeCount:'7'},
                    {id: '4', message:'Do not worry!', likeCount:'1'}
                ]
    let postMessageElements = postMessage
                                    .map(postMessage =><Post message={postMessage.message} likeCount={postMessage.likeCount} />);
    return (
        <div className={classes.postBlock}>
           <h3> My posts</h3>
      <div>
                <div>
                    <textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div >
            <div className={classes.posts}>
                {postMessageElements}
            </div>    
            </div>
        )
}

export default MyPosts;