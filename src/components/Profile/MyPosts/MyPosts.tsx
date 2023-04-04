import React, {useCallback} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {AddItemForm} from '../../AddItemForm/AddItemForm';
import {addPostAC, UsersType} from '../../../reducers/profileReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/reduxStore';


export const MyPosts = () => {
    const posts = useSelector<AppRootStateType, UsersType[]>(state => state.profilePage.posts);
    const dispatch = useDispatch()

    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPost = useCallback((title: string) => {
        dispatch(addPostAC(title))
    },[dispatch])

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