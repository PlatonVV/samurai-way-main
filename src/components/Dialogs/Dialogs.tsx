import React from 'react';
import s from './Dialogs.module.css'
import {Messages} from './Messages/Messages';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {ActionsTypes, DialogsPageType, sendMessageAC} from '../../redux/state';
import {InputButton} from '../Input/InputButton';

type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void

}

export const Dialogs: React.FC<PropsType> = ({dialogsPage, dispatch}) => {

    let dialogsElements = dialogsPage.dialogs.map((dialog: { id: string; name: string; }) => <DialogsItem
        id={dialog.id} name={dialog.name}/>)
    let messagesElements = dialogsPage.messages.map((message: { message: string; }) => <Messages
        message={message.message}/>)

    const addPost =(postText: string)=>{
        dispatch(sendMessageAC(postText))
        console.log(postText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div> <InputButton name={'send'} callBack={addPost}/>
                    {/*<textarea ref={newMessagesElement}></textarea>*/}
                    {/*<button onClick={addMessage}>Add message</button>*/}
                </div>
            </div>
        </div>
    )
}