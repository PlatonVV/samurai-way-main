import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}


export const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'This is my first post', likesCount: 11},
        {id: 3, message: 'Yo Yo Yo Yo', likesCount: 1},
        {id: 4, message: 'Bla bla bla ', likesCount: 7},
    ]

    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/> )

    return (
        <>
            <div className={s.postsBlock}>
                <div><h3>My posts</h3></div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </>
    )
}