import {v1} from 'uuid';

export type FriendsType = {
    id: string
    name: string
}
export type initialStateSidebarReducerType = typeof initialState

const initialState = {
    friends: [
        {id: v1(), name: 'Mario'},
        {id: v1(), name: 'Leo'},
        {id: v1(), name: 'Julia'},
    ] as Array<FriendsType>,
}

export const sidebarReducer = (state: initialStateSidebarReducerType = initialState, action: any): initialStateSidebarReducerType => {
    switch (action.type) {
        case '': {
            return state
        }
        default:
            return state
    }
}