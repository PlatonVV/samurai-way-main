import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage: ProfilePageType
    addPostCallBack: (postMessage: string)=> void
    message: string
}

export const Profile= (props: PropsType) => {
    return (
        <>
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts} addPostCallBack={props.addPostCallBack} newPostText={props.message}/>
            </div>
        </>
    )
}
