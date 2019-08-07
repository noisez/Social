import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = (text) => {
        props.dispatch(addPostActionCreator(text));
    };

    let updateNewPostText = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} postsData={props.state.profilePage.postsData} newPostText={props.state.profilePage.newPostText} />
    )
};

export default MyPostsContainer;

