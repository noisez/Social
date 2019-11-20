import React from 'react';
import './dialogs.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormConstrols/FormControl";
import {maxLenghtCreator, required} from "../../utils/validators/validators";

const maxLenght15 = maxLenghtCreator(15);

const AddMessageForm = (props) => {
    return (
        <form className="dialogs__new-message" onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLenght15]} name="newMessageBody" placeholder="Enter new message" />
            <button className="new-message__submit">Send</button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.dialogsData.map( elem => <Dialog key={elem.id} name={elem.name} id={elem.id} />);

    let messagesElements = props.dialogs.messagesData.map( elem => <Message key={elem.id} message={elem.message} type={elem.type} />);

    let addNewMessage = (values) => {
        console.log(values.newMessageBody);
        props.addMessage(values.newMessageBody);
    };

    return (
        <div className="dialogs">
            <div className="dialogs__names">
                {dialogsElements}
            </div>
            <div className="dialogs__messages">
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
};

export default Dialogs;