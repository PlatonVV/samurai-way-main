import React from 'react';
import {AppRootStateType} from '../../redux/reduxStore';
import {useDispatch, useSelector} from 'react-redux';
import {followAC, setUsersAC, unFollowAC, UsersType} from '../../reducers/usersReducer';
import styles from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.png'

export const Users = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.users)

    const dispatch = useDispatch()
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            dispatch(setUsersAC(response.data.items));
        })
    }

    const onClickUnFollowHandler = (userId: string) => {
        dispatch(followAC(userId, false))
    }
    const onClickFollowHandler = (userId: string) => {
        dispatch(unFollowAC(userId, true))
    }
    return (
        <div>
            {users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="avatar"/>
                        </div>
                        <div>{u.followed
                            ? <button onClick={() => onClickUnFollowHandler(u.id)}>Unfollow</button>
                            : <button onClick={() => onClickFollowHandler(u.id)}>Follow</button>}
                         </div>
                    </span>
                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    <span>
                             <div>{'u.location.country'}</div>
                             <div>{'u.location.city'}</div>
                         </span>
                </div>,
            )}
        </div>
    );
};
