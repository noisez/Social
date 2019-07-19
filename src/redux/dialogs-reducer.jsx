const addMessage = 'addMessage';
const updateNewMessageText = 'updateNewMessageText';

export const addMessageActionCreator = (text) => ({type: addMessage, message: text});
export const updateNewMessageTextActionCreator = (text) => ({type: updateNewMessageText, newMessageText: text});

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case addMessage:
            let id = state.messagesData[state.messagesData.length - 1].id + 1;
            let newMessage = {
                message: action.message,
                id: id,
                type: 'sent',
                dialogId: 1
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case updateNewMessageText:
            state.newMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }
};

export default dialogsReducer;