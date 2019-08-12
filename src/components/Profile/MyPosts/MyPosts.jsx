import React from 'react';
import Post from './Post/Post'
import './my_posts.css'

const MyPosts = (props) => {

    let postsElements = props.postsData.map( elem => <Post key={elem.id} message={elem.message} likes={elem.likes}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let updateNewPostText = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className="my-posts">
            <div className="my-posts__new">
                <textarea onChange={ updateNewPostText } ref={newPostElement} placeholder="Write your message" className="new__input" value={props.newPostText}> </textarea>
                <button type="button" className="new__add" onClick={ addPost }>Add</button>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;

