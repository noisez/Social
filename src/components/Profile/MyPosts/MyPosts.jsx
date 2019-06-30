import React from 'react';
import Post from './Post/Post'
import './my_posts.css'

const MyPosts = (props) => {

    let postsElements = props.state.postsData.map( elem => <Post message={elem.message} likes={elem.likes}/> );

    return (
        <div className="my-posts">
            <div className="my-posts__new">
                <textarea placeholder="Write your message" className="new__input"></textarea>
                <button type="button" className="new__add">Add</button>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;

