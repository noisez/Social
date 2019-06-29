import React from 'react';
import Post from './Post/Post'
import './my_posts.css'

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'This is my favorite post!', likes: '10'},
        {id: 2, message: 'This is first post', likes: '4'},
        {id: 3, message: 'test', likes: '0'}
    ];

    let postsElements = postData.map( post => <Post message={post.message} likes={post.likes}/> );

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

