import React from 'react';
import './main.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="content">
                <Route path='/profile' render={ () => <Profile profile={props.store.getState().profile} dispatch={props.store.dispatch.bind(props.store)} />}/>
                <Route path='/dialogs' render={ () => (<Dialogs state={props.store.getState().dialogs} dispatch={props.store.dispatch.bind(props.store)} />)}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
