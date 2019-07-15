
let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: 'This is my favorite post!', likes: 10},
                {id: 2, message: 'This is first post', likes: 3},
                {id: 3, message: 'test', likes: 0}
            ]
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
            ]
        }
    },
<<<<<<< HEAD
    dispatch(action) {
        if (action.type === 'addMessage') {
            function randomInteger() {
                let rand = 1 + Math.random() * 5;
                rand = Math.floor(rand);
                return rand;
            }
            let dialog = randomInteger();
            let id = this._state.dialogs.messagesData[this._state.dialogs.messagesData.length - 1].id + 1;
            let newMessage = {
                id: id,
                message: action.message,
                type: 'sent',
                dialogId: dialog
            };
            this._state.dialogs.messagesData.push(newMessage);
            this.rerenderEntireTree(this);
        }
        else if (action.type === 'addPost') {
            function randomInteger() {
                let rand = 1 + Math.random() * 10;
                rand = Math.floor(rand);
                return rand;
            }
            let likes = randomInteger();
            let id = this._state.profile.postsData[this._state.profile.postsData.length - 1].id + 1;
            let newPost = {
                message: action.postMessage,
                id: id,
                likes: likes
            };
            this._state.profile.postsData.push(newPost);
            this.rerenderEntireTree(this);
        }
    },
    getState() {
        return this._state;
=======
    getState() {
        return this._state;
    },
    addMessage(message) {
        function randomInteger() {
            let rand = 1 + Math.random() * 5;
            rand = Math.floor(rand);
            return rand;
        }
        let dialog = randomInteger();
        let id = this._state.dialogs.messagesData[this._state.dialogs.messagesData.length - 1].id + 1;
        let newMessage = {
            id: id,
            message: message,
            type: 'sent',
            dialogId: dialog
        };
        this._state.dialogs.messagesData.push(newMessage);
        this.rerenderEntireTree(store);
    },
    addPost(postMessage) {
        function randomInteger() {
            let rand = 1 + Math.random() * 10;
            rand = Math.floor(rand);
            return rand;
        }
        let likes = randomInteger();
        let id = this._state.profile.postsData[this._state.profile.postsData.length - 1].id + 1;
        let newPost = {
            message: postMessage,
            id: id,
            likes: likes
        };
        this._state.profile.postsData.push(newPost);
        this.rerenderEntireTree(store);
>>>>>>> 1ad0235968a64d9206db6ae08692d559fba134d0
    },
    rerenderEntireTree() {},
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
    // addMessage(message) {
    //     function randomInteger() {
    //         let rand = 1 + Math.random() * 5;
    //         rand = Math.floor(rand);
    //         return rand;
    //     }
    //     let dialog = randomInteger();
    //     let id = this._state.dialogs.messagesData[this._state.dialogs.messagesData.length - 1].id + 1;
    //     let newMessage = {
    //         id: id,
    //         message: message,
    //         type: 'sent',
    //         dialogId: dialog
    //     };
    //     this._state.dialogs.messagesData.push(newMessage);
    //     this.rerenderEntireTree(this);
    // },
    // addPost(postMessage) {
    //     function randomInteger() {
    //         let rand = 1 + Math.random() * 10;
    //         rand = Math.floor(rand);
    //         return rand;
    //     }
    //     let likes = randomInteger();
    //     let id = this._state.profile.postsData[this._state.profile.postsData.length - 1].id + 1;
    //     let newPost = {
    //         message: postMessage,
    //         id: id,
    //         likes: likes
    //     };
    //     this._state.profile.postsData.push(newPost);
    //     this.rerenderEntireTree(this);
    // },
};

export default store;


// let state = {
//     profile: {
//         postsData: [
//             {id: 1, message: 'This is my favorite post!', likes: 10},
//             {id: 2, message: 'This is first post', likes: 3},
//             {id: 3, message: 'test', likes: 0}
//         ]
//     },
//     dialogs: {
//         dialogsData: [
//             {id: 1, name: 'Serhii'},
//             {id: 2, name: 'Alexander'},
//             {id: 3, name: 'Vitaliy'},
//             {id: 4, name: 'Julia'},
//             {id: 5, name: 'Iron Man'},
//         ],
//         messagesData: [
//             {id: 1, message: 'Hi, how are you?', type: 'sent', dialogId: 1},
//             {id: 2, message: 'Hello, i am fine.', type: 'recieved', dialogId: 1},
//             {id: 3, message: 'Great :)', type: 'sent', dialogId: 1},
//             {id: 4, message: 'What did you do last weekend?', type: 'recieved', dialogId: 1},
//             {id: 5, message: 'I worked all the time.', type: 'sent', dialogId: 1},
//             {id: 6, message: 'Hello!', type: 'sent', dialogId: 2},
//             {id: 7, message: 'Hi, nice to meet you.', type: 'recieved', dialogId: 2},
//             {id: 8, message: 'I have some new', type: 'sent', dialogId: 2},
//             {id: 9, message: 'What is it?', type: 'recieved', dialogId: 2},
//             {id: 10, message: 'I get a new job', type: 'sent', dialogId: 2},
//             {id: 1, message: 'Hey', type: 'sent', dialogId: 4},
//             {id: 12, message: 'Whats wrong?', type: 'sent', dialogId: 4},
//             {id: 13, message: 'I need some cash', type: 'recieved', dialogId: 4},
//             {id: 14, message: 'What about the sum?', type: 'sent', dialogId: 4},
//             {id: 15, message: '1000$', type: 'recieved', dialogId: 4},
//             {id: 16, message: 'No way!', type: 'sent', dialogId: 4}
//         ]
//     }
// };

// let rerenderEntireTree = () => {};

// export let addMessage = (message) => {
//     function randomInteger() {
//         let rand = 1 + Math.random() * 5;
//         rand = Math.floor(rand);
//         return rand;
//     }
//     let dialog = randomInteger();
//     let id = state.dialogs.messagesData[state.dialogs.messagesData.length - 1].id + 1;
//     let newMessage = {
//         id: id,
//         message: message,
//         type: 'sent',
//         dialogId: dialog
//     };
//     state.dialogs.messagesData.push(newMessage);
//     rerenderEntireTree(state, addPost , addMessage);
// };

// export let addPost = (postMessage) => {
//     function randomInteger() {
//         let rand = 1 + Math.random() * 10;
//         rand = Math.floor(rand);
//         return rand;
//     }
//     let likes = randomInteger();
//     let id = state.profile.postsData[state.profile.postsData.length - 1].id + 1;
//     let newPost = {
//         message: postMessage,
//         id: id,
//         likes: likes
//     };
//     state.profile.postsData.push(newPost);
//     rerenderEntireTree(state, addPost, addMessage);
// };

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// };

// export default state;