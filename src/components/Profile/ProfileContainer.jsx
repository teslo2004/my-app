import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {getUserProfile} from '../Redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { UsersAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    componentDidMount() {
      
        let userId = this.props.match.params.userId;
       if (!userId){
           userId = 2;
       }
      this.props.getUserProfile(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} 
                profile={this.props.profile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);