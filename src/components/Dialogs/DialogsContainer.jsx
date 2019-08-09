import React from 'react';
import './dialogs.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return (

        <StoreContext.Consumer>
            {
                (store) => {

                    let addMessage = (text) => {
                        store.dispatch(addMessageActionCreator(text));
                    };

                    let updateNewMessageText = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    };

                    return (
                        <Dialogs dialogs={store.getState().dialogsPage} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
                        );
                }
            }

        </StoreContext.Consumer>
    )
};

export default DialogsContainer;