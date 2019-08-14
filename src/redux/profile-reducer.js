const addPost = 'addPost';
const updateNewPostText = 'updateNewPostText';

export const addPostActionCreator = (text) => ({type: addPost, postMessage: text});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newPostText: text});

let initialState = {
    postsData: [
        {id: 1, message: 'This is my favorite post!', likes: 10},
        {id: 2, message: 'This is first post', likes: 3},
        {id: 3, message: 'test', likes: 0}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case addPost: {
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

        case updateNewPostText: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }

        default:
            return state;
    }
};

export default profileReducer;
