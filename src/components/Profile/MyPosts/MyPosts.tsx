import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export type postTextType = {
    messageText: string
}
const postText_1 = 'Hey, how are you?';
const postText_2 = 'Yo, whats up?';
const postText_3 = 'How do you do?';

export const MyPosts = () => {
    return (
        <><div className={s.posts}>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post messageText={postText_1 }/>
            <Post messageText={postText_2}/>
            <Post messageText={postText_3}/>
        </div>
        </>
    )
}