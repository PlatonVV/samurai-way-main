import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Mario
                </div>
                <div className={s.dialog}>
                    Vince
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi, how are you?</div>
                <div className={s.dialog}>Whats up?</div>
                <div className={s.dialog}>Yo yo yo!</div>
            </div>
        </div>
    )
}