
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
    getState() {
        return store._state;
    },
    addMessage(message) {
        function randomInteger() {
            let rand = 1 + Math.random() * 5;
            rand = Math.floor(rand);
            return rand;
        }
        let dialog = randomInteger();
        let id = store.getState().dialogs.messagesData[store.getState().dialogs.messagesData.length - 1].id + 1;
        let newMessage = {
            id: id,
            message: message,
            type: 'sent',
            dialogId: dialog
        };
        store.getState().dialogs.messagesData.push(newMessage);
        store.rerenderEntireTree(store);
    },
    addPost(postMessage) {
        function randomInteger() {
            let rand = 1 + Math.random() * 10;
            rand = Math.floor(rand);
            return rand;
        }
        let likes = randomInteger();
        let id = store.getState().profile.postsData[store.getState().profile.postsData.length - 1].id + 1;
        let newPost = {
            message: postMessage,
            id: id,
            likes: likes
        };
        store.getState().profile.postsData.push(newPost);
        store.rerenderEntireTree(store);
    },
    rerenderEntireTree() {},
    subscribe(observer) {
        store.rerenderEntireTree = observer;
    }
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