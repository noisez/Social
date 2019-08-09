import React from 'react';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import './profile.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__header">
                <img src="https://marin.ru/ai/1000/geo.113.thumb.big/fiji-main(pics.1).jpg" alt="icon" className="header__img"/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;

