import React from 'react';
import './dialogs.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( elem => <Dialog name={elem.name} id={elem.id} />);

    let messagesElements = props.state.messagesData.map( elem => <Message message={elem.message} type={elem.type} />);

    return (
        <div className="dialogs">
            <div className="dialogs__names">
                {dialogsElements}
            </div>
            <div className="dialogs__messages">
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;