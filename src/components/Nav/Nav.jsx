import React from 'react';
import './nav.css'
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><NavLink to="/users" className="nav__link">Users</NavLink></li>
                <li className="nav__item"><NavLink to="/profile" className="nav__link">My profile</NavLink></li>
                <li className="nav__item"><NavLink to="/dialogs" className="nav__link">Messages</NavLink></li>
                <li className="nav__item"><NavLink to="/news" className="nav__link">News</NavLink></li>
                <li className="nav__item"><NavLink to="/music" className="nav__link">Music</NavLink></li>
                <li className="nav__item"><NavLink to="/settings" className="nav__link">Settings</NavLink></li>
            </ul>
        </nav>
    )
};

export default Nav;