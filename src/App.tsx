import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import DialogsComposeComponent from './components/Dialogs/DialogsContainer'
import {UsersContainer} from './components/Users/UsersContainer'
import HeaderContainerApi from "./components/Header/HeaderContainerApi";
import ProfileComposeComponent from './components/Profile/ProfileContainer'
import {connect} from "react-redux";
import {initializationMeThunkCreator} from "./redux/appReducer";
import {StateType} from "./redux/reduxStore";
import Login2 from "./components/Login/LoginAntDesign";
import {Alert, Spin} from "antd";
import {Friends} from "./components/Friends/Friends";
import {Chat} from "./components/Chat/Chat";
import { News } from './components/News/News';

type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializationMeThunkCreator()
    }

    render() {
        return (
            !this.props.initialValue ?
                <Spin style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}} size={"large"}/>
                :
                <div className='container'>
                    <div className='app-wrapper'>
                        <HeaderContainerApi/>
                        <div className="app-wrapper-content">
                            <Navbar/>
                            <div className="app-main-content">
                                <Route  path='/' render={() => <Redirect to={'/profile'}/>}/>
                                <Route path='/login' render={() => <Login2/>}/>
                                <Route path='/profile/:userId?' render={
                                    () => <ProfileComposeComponent/>}/>
                                <Route path='/dialogs/*' render={
                                    () => <DialogsComposeComponent/>}/>
                                <Route path='/chat/' render={
                                    () => <Chat/>}/>
                                <Route path='/users/*' render={
                                    () => <UsersContainer isFriends={false}/>
                                }/>
                                <Route path='/friends/' render={()=>
                                    <Friends/>
                                }/>
                                <Route path='/news/' render={()=> 
                                    <News/>
                                }/>

                                {this.props.errorMessages && <Alert
                                    style={{alignSelf: 'center'}}
                                    description={this.props.errorMessages}
                                    type="error"
                                    showIcon
                                    closable
                                    className='alert'
                                />}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

type mapStateToPropsType = {
    initialValue: boolean
    errorMessages:string | null
}
type mapDispatchToPropsType = {
    initializationMeThunkCreator: () => void
}


const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        initialValue: state.app.initializationValue,
        errorMessages:state.auth.errorMessages
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializationMeThunkCreator}))
(App);
