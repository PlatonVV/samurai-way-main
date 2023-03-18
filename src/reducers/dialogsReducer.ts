import {v1} from 'uuid';
import {ActionsType, DialogsPageType} from '../generalTypes/GeneralTypes';



const initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Plato'},
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Nikita'},
        {id: v1(), name: 'Cris'},
        {id: v1(), name: 'Neo'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Whats up!'},
        {id: v1(), message: 'V-vendetta'},
        {id: v1(), message: 'YoYOYO'},
        {id: v1(), message: 'Carnaval jazz!'},
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state=initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = action.payload.message;
            state.newMessageBody = ''
            state.messages.push({id: v1(), message: body})
            return state
        } default: return state
    }
}

export const sendMessageAC = (message: string) =>
    ({type: 'SEND-MESSAGE', payload: {message}} as const)