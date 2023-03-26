import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from '../reducers/dialogsReducer';
import {sidebarReducer} from '../reducers/sidebarReducer';
import {profileReducer} from '../reducers/profileReducer';

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>