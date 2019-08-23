import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {usersApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersApi.checkUserAuth().then( data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data.id, data.data.login, data.data.email);
            }
        } );
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);