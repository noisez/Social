import state, {addMessage, addPost} from './redux/state';
import {rerenderEntireTree} from "./render";
import * as serviceWorker from './serviceWorker';

rerenderEntireTree(state, addPost, addMessage);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
