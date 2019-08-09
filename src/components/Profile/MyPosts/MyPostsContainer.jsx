import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

    return (

        <StoreContext.Consumer>
            {
                (store) => {

                    let addPost = (text) => {
                        store.dispatch(addPostActionCreator(text));
                    };

                    let updateNewPostText = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    };

                    return (<MyPosts updateNewPostText={updateNewPostText} addPost={addPost} postsData={store.getState().profilePage.postsData} newPostText={store.getState().profilePage.newPostText} />);
                }
            }

        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;

