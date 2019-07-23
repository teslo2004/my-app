import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        
        
        <div className={classes.item}>
            <img src='http://www.hitroe.com/attachment/news_avatar-bloody-angel/avatar.jpg' />
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;