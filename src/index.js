import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './components/Redux/state';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



export let rerenderTree=(state)=>{
ReactDOM.render(
    <BrowserRouter>
        <App state={state} 
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        />
    </BrowserRouter>  ,
    document.getElementById('root')
)};
rerenderTree(store._state);
store.subscribe(rerenderTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
