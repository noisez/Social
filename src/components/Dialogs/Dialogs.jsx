import React from 'react';
import './dialogs.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className="names__item">
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className="messages__item">{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Serhii'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Vitaliy'},
        {id: 4, name: 'Julia'},
        {id: 5, name: 'Iron Man'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'Hello, i am fine.'},
        {id: 3, message: 'Great :)'},
        {id: 4, message: 'What did you do last weekend?'},
        {id: 5, message: 'I worked all the time.'}
    ];

    let dialogsElements = dialogsData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map( message => <Message message={message.message}/>);

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