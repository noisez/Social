import React from 'react';
import './header.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <NavLink to="/" className="header__logo">
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="icon" className="logo__img"/>
            </NavLink>
            <div className="header__login">
                {props.isAuth ? <div>{props.login}<button onClick={props.logout}>Logout</button></div> : <NavLink to='/login' className='login__link'>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;