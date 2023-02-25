import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';
type PropsType = {
    posts: PostsType[]
 }

 export const MyPosts = (props:PropsType) => {
     let postsElements = props.posts.map(p=> <Post message={p.message} likesCount ={p.likesCount} />);

    const addPost = ()=>{}
    return (
        <><div className={s.postsBlock}>
            <div>My posts</div>
            <textarea></textarea>
            <button onClick={addPost}>Add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
        </>
    )
}