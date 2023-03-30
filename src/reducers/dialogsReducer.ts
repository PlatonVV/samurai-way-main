import {v1} from 'uuid';

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
type ActionsType = SendMessageActionType
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type initialStateDialogsReducerType = typeof initialState


const initialState = {
    dialogs: [
        {id: v1(), name: 'Plato'},
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Nikita'},
        {id: v1(), name: 'Cris'},
        {id: v1(), name: 'Neo'},
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Whats up!'},
        {id: v1(), message: 'V-vendetta'},
        {id: v1(), message: 'YoYOYO'},
        {id: v1(), message: 'Carnaval jazz!'},
    ] as Array<MessagesType>,
}

export const dialogsReducer = (state: initialStateDialogsReducerType = initialState, action: ActionsType): initialStateDialogsReducerType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            return {...state, messages: [{id: v1(), message: action.payload.message}, ...state.messages]}
        }
        default:
            return state
    }
}

export const sendMessageAC = (message: string) =>
    ({type: 'SEND-MESSAGE', payload: {message}} as const)