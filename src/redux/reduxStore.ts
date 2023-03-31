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

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
