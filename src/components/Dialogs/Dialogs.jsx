import React from 'react';
import './dialogs.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( elem => <Dialog name={elem.name} id={elem.id} />);

    let messagesElements = props.state.messagesData.map( elem => <Message message={elem.message} type={elem.type} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                <textarea ref={newMessage} className="new-message__input"></textarea>
                <button onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    )
};

export default Dialogs;