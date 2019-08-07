import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postMessage={props.profilePage.postMessage}
            newPostText={props.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText}
             addPost={props.addPost}/>
        </div>
    )
}

export default Profile;