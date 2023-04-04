import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from '../reducers/dialogsReducer';
import {sidebarReducer} from '../reducers/sidebarReducer';
import {profileReducer} from '../reducers/profileReducer';
import { usersReducer } from '../reducers/usersReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export type AppRootStateType = ReturnType<typeof rootReducer>
