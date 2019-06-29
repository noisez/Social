import React from 'react';
import './post.css'

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__body">
                <img src="https://fanparty.ru/fanclubs/highlander/gallery/343346_highlander_pic.JPG" alt="icon" className="post__img"/>
                <p className="post__text">{props.message}</p>
            </div>
            <p className="post__like">Likes: <span className="like__count">{props.likes}</span></p>
        </div>
    )
};

export default Post;

