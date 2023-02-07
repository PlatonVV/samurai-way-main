import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export type postTextType = {
    messageText: string
}
const postText_1 = 'Test new branch dev!!!!!!!!!';
const postText_2 = 'Yo, whats up?';
const postText_3 = 'How do you do?';

export const MyPosts = () => {
    return (
        <>
            <div className={s.postsBlock}>
                <div><h3>My posts</h3></div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post messageText={postText_1}/>
                    <Post messageText={postText_2}/>
                    <Post messageText={postText_3}/>
                </div>
            </div>
        </>
    )
}