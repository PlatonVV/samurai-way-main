import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {AddItemForm} from '../../AddItemForm/AddItemForm';
import {addPostAC} from '../../../reducers/profileReducer';
import {ActionsType, PostsType} from '../../../generalTypes/GeneralTypes';

type PropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}


export const MyPosts: React.FC<PropsType> = ({posts, newPostText, dispatch, ...props}) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPost = (title: string) => {
        dispatch(addPostAC(title))

    }

    return (
        <>
            <div className={s.postsBlock}>
                <div>My posts</div>
                <AddItemForm name={'send'} addItem={addPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </>
    )
}