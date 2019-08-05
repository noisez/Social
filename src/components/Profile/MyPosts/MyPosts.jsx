import React from 'react';
import Post from './Post/Post'
import './my_posts.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.profile.postsData.map( elem => <Post message={elem.message} likes={elem.likes}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));
    };

    let updateNewPostText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
        e.target.value = props.profile.newPostText;
    };

    return (
        <div className="my-posts">
            <div className="my-posts__new">
                <textarea onChange={ updateNewPostText } ref={newPostElement} placeholder="Write your message" className="new__input" value={props.profile.newPostText}> </textarea>
                <button type="button" className="new__add" onClick={ addPost }>Add</button>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;

