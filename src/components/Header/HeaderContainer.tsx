import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getAuthUserData, LoginType} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {

        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: LoginType
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

export type HeaderContainerPropsType = mapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);