import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from '../../generalTypes/GeneralTypes';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile: React.FC<PropsType>= ({profilePage, dispatch, ...props}) => {
    return (
        <>
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts
                    posts={profilePage.posts}  dispatch={dispatch} newPostText={profilePage.newPostText}/>
            </div>
        </>
    )
}
