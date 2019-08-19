const follow = 'follow';
const unfollow = 'unfollow';
const setUsers = 'setUsers';
const setCurrentPage = 'setCurrentPage';
const setTotalUsersCount = 'setTotalUsersCount';

export const followAC = (userId) => ({type: follow, userId});
export const unfollowAC = (userId) => ({type: unfollow, userId});
export const setUsersAC = (users) => ({type: setUsers, users});
export const setCurrentPageAC = (currentPage) => ({type:setCurrentPage, currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type:setTotalUsersCount, totalUsersCount: totalCount});


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {

        case follow: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                } )
            };
        }

        case unfollow: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                } )
            };
        }

        case setUsers: {
            return {
                ...state,
                // users: [...state.users, ...action.users]
                users: action.users
            };
        }

        case setCurrentPage: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }

        case setTotalUsersCount: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        }

        default:
            return state;
    }
};

export default usersReducer;

