import React from "react";
import {StoreTypeNative} from "./App";

const StoreContext = React.createContext({} as StoreTypeNative)

type ProviderPropsType = {
    store: StoreTypeNative
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext