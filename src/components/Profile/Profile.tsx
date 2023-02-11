import React from 'react';
import s from './Profile.module.css';
import {MyPosts, PostPropsType, PostType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'This is my first post', likesCount: 11},
        {id: 3, message: 'Yo Yo Yo Yo', likesCount: 1},
        {id: 4, message: 'Bla bla bla ', likesCount: 7},
    ]

    return (
        <>
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={posts}/>
            </div>
        </>
    )
}
