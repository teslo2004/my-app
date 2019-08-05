import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, updateNewPostText } from './components/Redux/state';
import './index.css';

export let rerender=(state)=>{
ReactDOM.render(
        <BrowserRouter><App state={state} 
        addPost={addPost}
        updateNewPostText={updateNewPostText}/>
        </BrowserRouter>  , 
        document.getElementById('root')
        )};

