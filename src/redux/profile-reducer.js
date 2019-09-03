import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

let initialState = {
    postsData: [
        {id: 1, message: 'This is my favorite post!', likes: 10},
        {id: 2, message: 'This is first post', likes: 3},
        {id: 3, message: 'test', likes: 0}
    ],
    newPostText: '',
    profile: null,
    status: ''
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
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }

        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            };
        }

        default:
            return state;
    }
};

export const getProfile = (userId, authUserId) => {
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
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getUserStatus(userId).then( data => {
            dispatch(setUserStatus(data));
        } );
    }
};

export default profileReducer;

