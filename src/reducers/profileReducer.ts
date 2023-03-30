import {v1} from 'uuid';
import {ProfilePageType} from '../generalTypes/GeneralTypes';
import {sendMessageAC} from './dialogsReducer';

export type AddPostActionType = ReturnType<typeof addPostAC>
 type ActionsType = AddPostActionType | ReturnType<typeof sendMessageAC>

const initialState: ProfilePageType = {
    ['posts']: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'This is my first post', likesCount: 11},
        {id: v1(), message: 'Yo Yo Yo Yo', likesCount: 1},
        {id: v1(), message: 'Bla bla bla ', likesCount: 7},
    ],
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state, ['posts']: [ {id: v1(), message: action.payload.message, likesCount: 7}, ...state['posts']] }
        }
        default:
            return state
    }
}

export const addPostAC = (message: string) =>
    ({type: 'ADD-POST', payload:  {message}} as const)