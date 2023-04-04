import React, {useCallback} from 'react';
import s from './Dialogs.module.css'
import {Messages} from './Messages/Messages';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {AddItemForm} from '../AddItemForm/AddItemForm';
import {initialStateDialogsReducerType, sendMessageAC} from '../../reducers/dialogsReducer';
import {AppRootStateType} from '../../redux/reduxStore';
import {useDispatch, useSelector} from 'react-redux';


export const Dialogs = () => {
    const dialogsPage = useSelector<AppRootStateType, initialStateDialogsReducerType>(state => state.dialogsPage)
    const dispatch = useDispatch()
    let dialogsElements = dialogsPage.dialogs.map((d: { id: string; name: string; }) =>
        <DialogsItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = dialogsPage.messages.map((m: { id: string; message: string; }) =>
        <Messages key={m.id} message={m.message}/>)

    const addPost = useCallback((postText: string) => {
        dispatch(sendMessageAC(postText))
    },[dispatch])
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <AddItemForm name={'send'} addItem={addPost}/>
                </div>
            </div>
        </div>
    )
}