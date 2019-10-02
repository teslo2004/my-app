import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "..//../common/Preloader/preloader";
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='profileInfo' />
            </div> */}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='ava'/>
                <ProfileStatus status={"Hello world!"}/>
            </div>    
        </div>       
    )
}

export default ProfileInfo;