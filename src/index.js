import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogData = [{id:'1', name:'Alex'},
                  {id:'2', name:'Elena'},
                  {id:'3', name:'Dima'},
                  {id:'4', name:'Andrew'},
                  {id:'5', name:'Olga'}
                    ];

let messageData = [{id:'0', message:'Hi!'},
                   {id:'1', message:'How are you?'},
                   {id:'2', message:'I am fine!'}
                    ];

let postMessage = [{id: '1', message:'Hi, it is my first message', likeCount:'14'},
                    {id: '2', message:'Hi, how are you', likeCount:'4'},
                    {id: '3', message:'I am fine!', likeCount:'7'},
                    {id: '4', message:'Do not worry!', likeCount:'1'}
                    ];

ReactDOM.render(<App postMessage={postMessage} messageData={messageData} dialogData={dialogData}/> ,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
