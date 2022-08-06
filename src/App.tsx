import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import {ActionType, StateType, StoreType} from "./redux/store";
import {EmptyObject, Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type StoreTypeNative = Store<EmptyObject & StateType, any>

type AppPropsType = {
    store: StoreTypeNative
    state: StateType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
