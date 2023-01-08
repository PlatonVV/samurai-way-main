import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <>
            <div className={s.content}>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="Bali"/></div>
                <div>
                    avatar + description
                </div>
                <MyPosts/>
            </div>
        </>
    )
}
