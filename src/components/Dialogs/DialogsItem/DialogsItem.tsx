import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialogsItemPropsType = {
    id: string,
    name: string,
}

export const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </>
    )
}

