import React from 'react';
import Post from './Post/Post'
import './my_posts.css'

const MyPosts = (props) => {

    let postsElements = props.profile.postsData.map( elem => <Post message={elem.message} likes={elem.likes}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        console.log(props.dispatch);
        let text = newPostElement.current.value;
        props.dispatch({type: 'addPost', postMessage: text});
        newPostElement.current.value = '';

    };

    return (
        <div className="my-posts">
            <div className="my-posts__new">
                <textarea ref={newPostElement} placeholder="Write your message" className="new__input"></textarea>
                <button type="button" className="new__add" onClick={ addPost }>Add</button>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;

