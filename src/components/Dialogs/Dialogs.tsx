import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialogsItemPropsType = {
    id: string,
    name: string,
}

export const DialogItem = (props: DialogsItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </>
    )
}

export type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <>
            <div className={s.dialog}>{props.message}</div>
        </>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Dimych"/>
                <DialogItem id="2" name="Mark"/>
                <DialogItem id="3" name="Mario"/>
                <DialogItem id="4" name="Clemency"/>
                <DialogItem id="5" name="Anton"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi, how are you?"/>
                <Message message="Whats up?"/>
                <Message message="Yo yo yo!"/>
            </div>
        </div>
    )
}