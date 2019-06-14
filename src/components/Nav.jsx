import React from 'react';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link">Profile</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Messages</a></li>
                <li className="nav__item"><a href="#" className="nav__link">News</a></li>
            </ul>
        </nav>
    )
};

export default Nav;