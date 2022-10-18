import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getAuthUserData, LoginType, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

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
    getAuthUserData: () => void
    logout: () => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);