import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Valera'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
]

let posts = [
    {id: 1, message: 'Hi', likeCounts: 25},
    {id: 2, message: 'My first post', likeCounts: 36},
    {id: 3, message: 'My post', likeCounts: 36},
    {id: 4, message: 'My daas', likeCounts: 36},
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
);