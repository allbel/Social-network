import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {StateType} from "../redux/reduxStore";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T} />
    }

    let RedirectComponentConnect = connect(mapStateToProps)(RedirectComponent)
    return RedirectComponentConnect
};

