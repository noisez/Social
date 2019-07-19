import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: 'This is my favorite post!', likes: 10},
                {id: 2, message: 'This is first post', likes: 3},
                {id: 3, message: 'test', likes: 0}
            ],
            newPostText: ''
        },
        dialogs: {
            dialogsData: [
                {id: 1, name: 'Serhii'},
                {id: 2, name: 'Alexander'},
                {id: 3, name: 'Vitaliy'},
                {id: 4, name: 'Julia'},
                {id: 5, name: 'Iron Man'},
            ],
            messagesData: [
                {id: 1, message: 'Hi, how are you?', type: 'sent', dialogId: 1},
                {id: 2, message: 'Hello, i am fine.', type: 'recieved', dialogId: 1},
                {id: 3, message: 'Great :)', type: 'sent', dialogId: 1},
                {id: 4, message: 'What did you do last weekend?', type: 'recieved', dialogId: 1},
                {id: 5, message: 'I worked all the time.', type: 'sent', dialogId: 1},
                {id: 6, message: 'Hello!', type: 'sent', dialogId: 2},
                {id: 7, message: 'Hi, nice to meet you.', type: 'recieved', dialogId: 2},
                {id: 8, message: 'I have some new', type: 'sent', dialogId: 2},
                {id: 9, message: 'What is it?', type: 'recieved', dialogId: 2},
                {id: 10, message: 'I get a new job', type: 'sent', dialogId: 2},
                {id: 1, message: 'Hey', type: 'sent', dialogId: 4},
                {id: 12, message: 'Whats wrong?', type: 'sent', dialogId: 4},
                {id: 13, message: 'I need some cash', type: 'recieved', dialogId: 4},
                {id: 14, message: 'What about the sum?', type: 'sent', dialogId: 4},
                {id: 15, message: '1000$', type: 'recieved', dialogId: 4},
                {id: 16, message: 'No way!', type: 'sent', dialogId: 4}
            ],
            newMessageText: ''
        }
    },
    dispatch(action) {
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.profile = profileReducer(this._state.profile, action);
        this.rerenderEntireTree(this);
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {},
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
};

export default store;