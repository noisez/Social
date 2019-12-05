import {usersApi} from "../api/api";

const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'setUsers';
const SET_CURRENT_PAGE = 'setCurrentPage';
const SET_TOTAL_USSERS_COUNT = 'setTotalUsersCount';
const TOGGLE_IS_FETCHING = 'toggleIsFetching';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'followingInProgress';

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USSERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (followingInProgress) => ({type:TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress});


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                } )
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                } )
            };
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }

        case SET_TOTAL_USSERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }

        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
            };
        }

        default:
            return state;
    }
};

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize).then( data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        } );
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true));
        usersApi.unfollowUser(userId).then( data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
                dispatch(toggleFollowingInProgress(false));
            }
        } );
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true));
        usersApi.followUser(userId).then( data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
                dispatch(toggleFollowingInProgress(false));
            }
        } );
    }
};

export default usersReducer;

