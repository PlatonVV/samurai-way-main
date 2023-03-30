import {v1} from 'uuid';
import {
    dialogsReducer,
    DialogsType,
    initialStateDialogsReducerType,
    MessagesType,
    sendMessageAC,
} from './dialogsReducer';
let startState: initialStateDialogsReducerType
 beforeEach(()=>{
      startState = {
         dialogs: [
             {id: v1(), name: 'Plato'},
             {id: v1(), name: 'Ivan'},
         ] as Array<DialogsType> ,
         messages: [
             {id: v1(), message: 'Hi'},
             {id: v1(), message: 'How are you?'},
             {id: v1(), message: 'Whats up!'},

         ] as Array<MessagesType>,
     }
 })

test('new message should be send', () => {
    const endState = dialogsReducer(startState, sendMessageAC('NEW MESSAGE'))
    expect(endState.messages[0].message).toBe('NEW MESSAGE')
})