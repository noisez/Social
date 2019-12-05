import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        if(!this.props.match.params.userId && !this.props.authUserId) {
            this.props.history.push('/login');
        }else {
            this.props.getProfile(this.props.match.params.userId, this.props.authUserId);
            this.props.getStatus(this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserId);
        }
    }

    render() {
        console.log('RENDER PROFILE');
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStstus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    console.log('mapStateToProps PROFILE');
    return ({
        profile: state.profilePage.profile,
        authUserId: state.auth.id,
        status: state.profilePage.status
    })
};

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus} ),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);