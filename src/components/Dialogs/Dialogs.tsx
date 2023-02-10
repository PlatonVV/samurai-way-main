import React from 'react';
import s from './Dialogs.module.css'
import {Messages} from './Messages/Messages';
import {DialogsItem} from './DialogsItem/DialogsItem';


export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Plato'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Cris'},
        {id: 6, name: 'Neo'},
    ]
    let dialogsElements = dialogs.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}/>)

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Whats up!'},
        {id: 4, message: 'V-vendetta'},
        {id: 5, message: 'YoYOYO'},
        {id: 6, message: 'Carnaval jazz!'},
    ]

    let messagesElements = messages.map(message => <Messages message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}