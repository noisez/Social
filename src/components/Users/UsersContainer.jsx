import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(withAuthRedirect, connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}))(UsersContainer);