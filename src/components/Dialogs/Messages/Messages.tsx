import React from 'react';
import s from '../Dialogs.module.css'


export type PropsType = {
    message: string
}

export const Messages = (props: PropsType) => {
    return (
        <>
            <div className={s.dialog}>{props.message}</div>
        </>
    )
}

