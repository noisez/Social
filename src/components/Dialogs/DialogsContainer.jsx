import React from 'react';
import './dialogs.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let addMessage = (text) => {
        props.dispatch(addMessageActionCreator(text));
    };

    let updateNewMessageText = (text) => {
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs dialogs={props.state.dialogsPage} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
    )
};

export default DialogsContainer;