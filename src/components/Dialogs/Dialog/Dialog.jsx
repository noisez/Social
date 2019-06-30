import React from 'react';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className="names__item">
            <img src="http://media.pn.am/media/issue/197/297/photo/197297.jpg" alt="icon" className="names__item_img"/>
            <NavLink className="names__item_link" to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default Dialog;