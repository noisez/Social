import React from 'react';
import './profile-info.css';
import Preloader from "../../Common/Preloader/Preloader";
import userDefaultImg from "../../../assets/images/824388_man_512x512.png";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    else {
        return (
            <div className="profile__info">
                <div className="info__avatar">
                    <img src={props.profile.photos.small ? props.profile.photos.small : userDefaultImg} alt="icon" className="avatar__img"/>
                </div>
                <div className="info__personal">
                    <p className="personal__name">{props.profile.fullName}</p>
                    <ul className="personal__common">
                        <li className="common__item">
                            <span className="item__left">Date of birth: </span>
                            <span className="item__right">16.02.-50</span>
                        </li>
                        <li className="common__item">
                            <span className="item__left">Need of work: </span>
                            <span className="item__right">{props.profile.lookingForAJob ? 'да' : 'нет'}</span>
                        </li>
                        <li className="common__item">
                            <span className="item__left">Work descriprion: </span>
                            <span className="item__right">{props.profile.lookingForAJobDescription}</span>
                        </li>
                        <li className="common__item">
                            <span className="item__left">About me: </span>
                            <span className="item__right">{props.profile.aboutMe}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;