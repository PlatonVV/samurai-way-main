import React from 'react';
import s from './Dialogs.module.css'
import {Messages} from './Messages/Messages';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {AddItemForm} from '../AddItemForm/AddItemForm';
import {sendMessageAC} from '../../reducers/dialogsReducer';
import {ActionsType, DialogsPageType} from '../../generalTypes/GeneralTypes';

type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void

}

export const Dialogs: React.FC<PropsType> = ({dialogsPage, dispatch, ...props}) => {

    let dialogsElements = dialogsPage.dialogs.map((dialog: { id: string; name: string; }) => <DialogsItem
        id={dialog.id} name={dialog.name}/>)
    let messagesElements = dialogsPage.messages.map((message: { message: string; }) => <Messages
        message={message.message}/>)

    const addPost =(postText: string)=>{
        dispatch(sendMessageAC(postText))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div> <AddItemForm name={'send'} addItem={addPost}/>
                </div>
            </div>
        </div>
    )
}