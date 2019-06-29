import React from 'react';
import Post from './Post/Post'
import './my_posts.css'

const MyPosts = () => {
    return (
        <div className="my-posts">
            <div className="my-posts__new">
                New Post
            </div>
            <div className="my-posts__published">
                <Post message='This is my favorite post!' likes='10'/>
                <Post message='This is first post' likes='4'/>
                <Post message='test' likes='0'/>
            </div>
        </div>
    )
};

export default MyPosts;

