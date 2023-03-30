import {DialogsPageType} from '../generalTypes/GeneralTypes';
import {v1} from 'uuid';
import {dialogsReducer, sendMessageAC} from './dialogsReducer';

test('new message should be send', () => {
    const startState: DialogsPageType = {
        ['dialogs']: [
            {id: v1(), name: 'Plato'},
            {id: v1(), name: 'Ivan'},
        ],
        ['messages']: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Whats up!'},

        ],
    }
    const endState = dialogsReducer(startState, sendMessageAC('NEW MESSAGE'))

    expect(endState['messages'][0].message).toBe('NEW MESSAGE')
})