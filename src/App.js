import React, {Component} from 'react';
import './main.css';
import Homepage from "./components/Homepage/Homepage";
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="content">
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => (<DialogsContainer/>)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps , {initializeApp})(App);
