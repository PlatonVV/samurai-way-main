import {ProfilePageType} from '../generalTypes/GeneralTypes';
import {v1} from 'uuid';
import {addPostAC, profileReducer} from './profileReducer';

test('new post should be added', ()=> {
    const startState: ProfilePageType = {
        ['posts']: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'This is my first post', likesCount: 11},
            {id: v1(), message: 'Yo Yo Yo Yo', likesCount: 1},
            {id: v1(), message: 'Bla bla bla ', likesCount: 7},
        ],
    }
    const endState = profileReducer(startState, addPostAC('NEW MESSAGE'))

    expect(endState['posts'][0].message).toBe('NEW MESSAGE')
})