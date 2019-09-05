import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

