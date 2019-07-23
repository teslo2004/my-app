import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
            <div>
                My posts
      <div>
                    <textarea></textarea>
                    <button>Add post</button>
      </div>
                <Post message='Hi, it is my first message' likeCount='14'/>
                <Post message='Hi, how are you' likeCount='24'/>
                <Post message='I am fine!' likeCount='1'/>
                
            </div>
        )
}

export default MyPosts;