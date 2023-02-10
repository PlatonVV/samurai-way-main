import React from 'react';
import s from '../Dialogs.module.css'


export type MessagePropsType = {
    message: string
}

export const Messages: React.FC<MessagePropsType> = (props) => {
    return (
        <>
            <div className={s.dialog}>{props.message}</div>
        </>
    )
}

