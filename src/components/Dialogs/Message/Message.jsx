import React from 'react';

const Message = (props) => {
    return (
        <div className={"messages__item messages__item_" + props.type}>
            <span className="messages__text">{props.message}</span>
        </div>
    )
};

export default Message;