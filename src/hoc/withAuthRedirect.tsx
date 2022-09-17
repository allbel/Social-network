import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";


type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
};