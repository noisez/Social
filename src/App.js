import React from 'react';
import './main.css';
import Homepage from "./components/Homepage/Homepage";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="content">
                <Route exact path='/' component={Homepage}/>
                <Route path='/users' render={ () => <UsersContainer />}/>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                <Route path='/dialogs' render={ () => (<DialogsContainer />)}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
};

export default App;
