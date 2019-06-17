import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './profile.css'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__header">
                <img src="https://www.cink.ru/images/products/images/6015.jpg" alt="icon" className="header__img"/>
            </div>
            <div className="profile__info">
                <div className="info__avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCNRITS-4ALEzg_xLZwWmiv5-6UCGkuhKjgNRe6kQbJALzcAf" alt="icon" className="avatar__img"/>
                </div>
                <div className="info__personal">
                    <p className="personal__name">Sergey K.</p>
                    <ul className="personal__common">
                        <li className="common__item">
                            <span className="item__left">Date of birth:</span>
                            <span className="item__right">16.02.-50</span>
                        </li>
                        <li className="common__item">
                            <span className="item__left">City:</span>
                            <span className="item__right">Kiev</span>
                        </li>
                        <li className="common__item">
                            <span className="item__left">Education:</span>
                            <span className="item__right">High school</span>
                        </li>
                        <li className="common__item">
                            <span className="item__left">Web site:</span>
                            <span className="item__right">http://something.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;

