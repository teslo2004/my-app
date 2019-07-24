import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='Hi, it is my first message' likeCount='14'/>
                <Post message='Hi, how are you' likeCount='24'/>
                <Post message='I am fine!' likeCount='1'/>
            </div>    
            </div>
        )
}

export default MyPosts;