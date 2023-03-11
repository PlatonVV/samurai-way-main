import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsTypes, addPostAC, PostsType, updateNewPostTextAC} from '../../../redux/state';

type PropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC(props.newPostText))
        }
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch( updateNewPostTextAC(e.currentTarget.value) )
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