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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
};

export default MyPosts;

