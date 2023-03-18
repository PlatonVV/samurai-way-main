import {combineReducers, createStore} from 'redux';
import { dialogsReducer } from '../reducers/dialogsReducer';
import { sidebarReducer } from '../reducers/sidebarReducer';
import {profileReducer} from '../reducers/profileReducer';
import {StoreType} from '../generalTypes/GeneralTypes';

const reducersBunch = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

export const store: StoreType = createStore(reducersBunch)