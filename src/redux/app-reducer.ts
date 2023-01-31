import {getAuthUserData} from "./auth-reducer";
import {StateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
    initialized: false,
    globalError: null
}
type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

// Actions
export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

// Thunks
export const initializeApp = (): AuthThunkType => (dispatch) => {
    const promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitializedSuccess())
    })
}

// Types
type ActionType = ReturnType<typeof setInitializedSuccess>
type AuthThunkType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionType>

export default appReducer