import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {AddItemForm} from '../../AddItemForm/AddItemForm';
import {addPostAC} from '../../../reducers/profileReducer';
import {useDispatch, useSelector} from 'react-redux';
import {PostsType} from '../../../generalTypes/GeneralTypes';
import {AppRootStateType} from '../../../redux/reduxStore';


export const MyPosts = () => {
    const posts = useSelector<AppRootStateType, PostsType[]>(state => state.profileReducer.posts);
    const dispatch = useDispatch()

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