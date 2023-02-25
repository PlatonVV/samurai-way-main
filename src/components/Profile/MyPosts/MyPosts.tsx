import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';

type PropsType = {
    posts: PostsType[]
    addPostCallBack: (postMessage: string) => void
    newPostText: string

}

export const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        debugger
        if (newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }
    const onPostChangeHandler = ()=>{

    }
    return (
        <>
            <div className={s.postsBlock}>
                <div>My posts</div>
                <textarea ref={newPostElement} onChange={onPostChangeHandler} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </>
    )
}