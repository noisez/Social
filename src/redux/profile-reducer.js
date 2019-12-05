import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

let initialState = {
    postsData: [
        {id: 1, message: 'This is my favorite post!', likes: 10},
        {id: 2, message: 'This is first post', likes: 3},
        {id: 3, message: 'test', likes: 0}
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let id = state.postsData[state.postsData.length - 1].id + 1;
            let newPost = {
                id: id,
                message: action.postMessage,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }

        case SET_USER_STATUS: {
            if (action.status === null) {
                action.status = 'no status'
            }
            return {
                ...state, status: action.status
            };
        }

        default:
            return state;
    }
};

export const getProfile = (userId, authUserId) => {
    if (!userId && !authUserId) {
        return false;
    }
    else {
        return (dispatch) => {
            if (!userId) {
                userId = authUserId;
                if (!userId) {
                    userId = 2;
                }
            }
            profileApi.getUserProfile(userId).then( data => {
                dispatch(setUserProfile(data));
            } );
        }
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getUserStatus(userId).then( data => {
            dispatch(setUserStatus(data));
        } );
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateUserStatus(status).then( data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        } );
    }
};

export default profileReducer;

