import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./redux/reduxStore";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename='/'>
            <App/>
        </HashRouter>
    </Provider>
    , document.getElementById('root')
);



