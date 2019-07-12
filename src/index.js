import React from 'react';
// import state, {addMessage, addPost, subscribe} from './redux/state';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import store from './redux/state';

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
