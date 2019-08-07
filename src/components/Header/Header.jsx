import React from 'react';
import './header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" className="header__link">
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="icon" className="header__logo"/>
            </NavLink>
        </header>
    )
};

export default Header;