import {applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import {AllActionsCreatorsProfile, ProfileReducer} from "./ProfileReducer";
import {AllActionsCreatorsTypeDialogs, DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {AllActionCreatorsTypeUser, UsersReducer} from "./UsersReducer";
import {AllActionsCreatorsTypeAuth, AuthReducer} from "./authReducer";
import MiddleWareThunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AllActionsCreatorsTypeApp, appReducer} from "./appReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    sidebar: SidebarReducer,
    userPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: appReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(MiddleWareThunk)
        // other store enhancers if any
    )
);

// @ts-ignore
window.store = store

export type AppDispatch = ThunkDispatch<StateType, unknown, DomainActionsCreatorsType>

export type AppThunk<ReturnType = void> = ThunkAction <ReturnType, StateType, unknown, DomainActionsCreatorsType>

export type DomainActionsCreatorsType =
    AllActionsCreatorsTypeApp
    | AllActionsCreatorsTypeAuth
    | AllActionsCreatorsProfile
    | AllActionsCreatorsTypeDialogs
    | AllActionCreatorsTypeUser

export type StateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

export type DispatchType = Dispatch
