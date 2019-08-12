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
    let stateCopy;
    switch(action.type) {
        case addPost: {
            stateCopy = {...state, postsData: [...state.postsData]};
            let id = state.postsData[state.postsData.length - 1].id + 1;
            let newPost = {
                id: id,
                message: action.postMessage,
                likes: 0
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case updateNewPostText: {
            stateCopy = {...state};
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        }

        default:
            return state;
    }
};

export default profileReducer;

