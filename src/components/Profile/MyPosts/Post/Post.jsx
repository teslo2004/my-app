import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        
        
        <div className={classes.item}>
            <img src='https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg' alt='post' />
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;