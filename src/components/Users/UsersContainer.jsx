import React from 'react';
import {connect} from 'react-redux';
import {
    follow, requestUsers,
    setCurrentPage,
    unfollow
} from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";
// import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                           totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           followingInProgress={this.props.followingInProgress}
                                                           onPageChanged={this.onPageChanged}/>}
        </>
    }

}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers}))(UsersContainer);