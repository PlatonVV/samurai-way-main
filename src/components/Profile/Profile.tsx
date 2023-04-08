import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileMainImg} from './ProfileMainImg/ProfileMainImg';

export type ProfileParams = {
    userId: string
}
export const Profile = () => {

    return (
        <>
            <div className={s.content}>
                <ProfileMainImg/>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </>
    )
}
