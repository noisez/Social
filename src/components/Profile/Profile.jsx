import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import './profile.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";

const Profile = (props) => {
    return (
        <div className="profile">
            {/*<div className="profile__header">*/}
                {/*<img src="https://marin.ru/ai/1000/geo.113.thumb.big/fiji-main(pics.1).jpg" alt="icon" className="header__img"/>*/}
            {/*</div>*/}
            <ProfileInfo profile={props.profile} />
            <ProfileStatus status={"This is my status"} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;

