import {v1} from "uuid";

export type SidebarType = {
    friendsData: Array<friendsDataType>
}
export type friendsDataType = {
    id: string
    name: string
}
let initialState: SidebarType = {
    friendsData: [
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Max'}
    ]
}


export const SidebarReducer = (state: SidebarType = initialState, action: any) => {
    return state
}
