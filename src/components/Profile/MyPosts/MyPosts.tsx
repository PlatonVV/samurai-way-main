import React from 'react';
import s from './MyPosts.module.css';
import {PostsType} from '../../../redux/state';
import {Post} from './Post/Post';


type PropsType = {
    posts: PostsType[]
}

export const MyPosts: React.FC<PropsType> = (props) => {
    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            alert(newPostElement.current.value)
        }
    }

    return (
        <>
            <div className={s.postsBlock}>
                <div><h3>My posts</h3></div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </>
    )
}