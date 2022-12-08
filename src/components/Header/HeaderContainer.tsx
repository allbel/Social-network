import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {LoginType, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

export type HeaderContainerPropsType = mapStateToPropsType & MapDispatchPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: LoginType
}

type MapDispatchPropsType = {
    logout: () => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);