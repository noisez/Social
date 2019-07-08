import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import './profile.css'

const Profile = (props) => {

    return (
        <div className="profile">
            <div className="profile__header">
                <img src="https://marin.ru/ai/1000/geo.113.thumb.big/fiji-main(pics.1).jpg" alt="icon" className="header__img"/>
            </div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    )
};

export default Profile;

