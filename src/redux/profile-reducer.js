import {usersApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

let initialState = {
    postsData: [
        {id: 1, message: 'This is my favorite post!', likes: 10},
        {id: 2, message: 'This is first post', likes: 3},
        {id: 3, message: 'test', likes: 0}
    ],
    newPostText: '',
    profile: null
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
        usersApi.getUserProfile(userId).then( data => {
            dispatch(setUserProfile(data));
        } );
    }

};

export default profileReducer;

