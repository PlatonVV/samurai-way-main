import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type PostPropsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<PostPropsType> = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
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