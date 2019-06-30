
let state = {
    profile: {
        postsData: [
            {id: 1, message: 'This is my favorite post!', likes: '10'},
            {id: 2, message: 'This is first post', likes: '4'},
            {id: 3, message: 'test', likes: '0'}
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
            {id: 1, message: 'Hi, how are you?', type: 'sent'},
            {id: 2, message: 'Hello, i am fine.', type: 'recieved'},
            {id: 3, message: 'Great :)', type: 'sent'},
            {id: 4, message: 'What did you do last weekend?', type: 'recieved'},
            {id: 5, message: 'I worked all the time.', type: 'sent'}
        ]
    }
};

export default state;