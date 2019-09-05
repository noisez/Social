import React from 'react';
import Post from './Post/Post'
import './my_posts.css'
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.postsData.map( elem => <Post key={elem.id} message={elem.message} likes={elem.likes}/> );

    let addNewPost = (value) => {
        props.addPost(value.newPostBody);
    };

    const AddNewPostForm = (props) => {
        return (
            <form className="my-posts__new" onSubmit={props.handleSubmit} >
                <Field name="newPostBody" component="textarea" placeholder="Enter your post" />
                <button className="new__add" >Add</button>
            </form>
        );
    };

    const AddNewPostReduxForm = reduxForm({
        form: "addNewPostForm"
    })(AddNewPostForm);

    return (
        <div className="my-posts">
            <AddNewPostReduxForm onSubmit={addNewPost} />
            {postsElements}
        </div>
    )
};



export default MyPosts;

