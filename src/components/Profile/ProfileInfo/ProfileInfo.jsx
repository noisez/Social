import React from 'react';
import './profile-info.css';

const ProfileInfo = (props) => {
    return (
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
    )
};

export default ProfileInfo;