import React from 'react';
import s from './Dialogs.module.css'
import {Messages} from './Messages/Messages';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {DialogsPageType} from '../../redux/state';
type PropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog: { id: string; name: string; }) => <DialogsItem
        id={dialog.id} name={dialog.name}/>)
    let messagesElements = props.dialogsPage.messages.map((message: { message: string; }) => <Messages
        message={message.message}/>)

    const newMessagesElement = React.createRef<HTMLTextAreaElement>();
    const addMessage=()=>{
        alert(newMessagesElement.current?.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessagesElement}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}