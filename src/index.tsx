import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost, StateType, subsribe, updateNewMessageText, updateNewPostText} from "./redux/state";


const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
        />,
        document.getElementById('root'));
}


rerenderEntireTree(state);

subsribe(rerenderEntireTree)