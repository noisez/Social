const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'setUsers';
const SET_CURRENT_PAGE = 'setCurrentPage';
const SET_TOTAL_USSERS_COUNT = 'setTotalUsersCount';
const TOGGLE_IS_FETCHING = 'toggleIsFetching';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USSERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                // users: [...state.users],
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

        default:
            return state;
    }
};

export default usersReducer;

