import React from 'react';
import './dialogs.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
const Dialogs = (props) => {
    
    let dialogsElements = props.dialogs.dialogsData.map( elem => <Dialog name={elem.name} id={elem.id} />);

    let messagesElements = props.dialogs.messagesData.map( elem => <Message message={elem.message} type={elem.type} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(addMessageActionCreator(text));
        newMessage.current.value = '';
    };

    let updateNewMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
        e.target.value = props.dialogs.newMessageText;
    };

    return (
        <div className="dialogs">
            <div className="dialogs__names">
                {dialogsElements}
            </div>
            <div className="dialogs__messages">
                {messagesElements}
            </div>
            <div className="dialogs__new-message">
                <textarea onChange={ updateNewMessageText } ref={newMessage} className="new-message__input" value={props.dialogs.newMessageText}></textarea>
                <button onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    )
};

export default Dialogs;