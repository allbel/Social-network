import {AuthUserThunkCreator} from "./authReducer";
import {AppDispatch} from "./reduxStore";

type initialStateType = typeof initialState
type initializationMeACType = ReturnType<typeof initializationMeAC>
export type AllActionsCreatorsTypeApp = initializationMeACType
const initialState = {
    initializationValue: false
}

export const appReducer = (state: initialStateType = initialState, action: AllActionsCreatorsTypeApp): initialStateType => {
    switch (action.type) {
        case 'INITIALIZATION-ME': {
            return {
                ...state,
                initializationValue: true
            }
        }

        default: {
            return state
        }
    }
};

export const initializationMeAC = () => {
    return {type: 'INITIALIZATION-ME'} as const
}

export const initializationMeThunkCreator = () => async (dispatch: AppDispatch) => {
    try {
        await dispatch(AuthUserThunkCreator())
        dispatch(initializationMeAC())

    } catch (err) {
        console.warn(err)
    }


}

