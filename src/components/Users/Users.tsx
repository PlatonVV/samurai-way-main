import React, {memo, useCallback, useEffect} from 'react';
import {AppRootStateType} from '../../redux/reduxStore';
import {useDispatch, useSelector} from 'react-redux';
import {
    followAC,
    initialStateUsersReducerType,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
} from '../../reducers/usersReducer';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Preloader} from '../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import { usersAPI} from '../../api/api';

export const Users = memo(() => {
    const usersPage = useSelector<AppRootStateType, initialStateUsersReducerType>(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsFetchingAC(true))
       usersAPI.getUsers(usersPage.currentPage, usersPage.pageSize).then(data => {
            dispatch(setUsersAC(data.items));
            dispatch(setIsFetchingAC(false))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }, [])
    const onClickCurrentPageHandler = useCallback((currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
        dispatch(setIsFetchingAC(true))
        usersAPI.getUsers(currentPage, usersPage.pageSize).then(data => {
            dispatch(setUsersAC(data.items));
            dispatch(setIsFetchingAC(false))
        })
    }, [dispatch])

    const onClickUnFollowHandler = useCallback((userId: string) => {
        dispatch(followAC(userId, false))
    }, [dispatch])
    const onClickFollowHandler = useCallback((userId: string) => {

        dispatch(unFollowAC(userId, true))
    }, [dispatch])


    let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize / 100)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const mapUsers = usersPage.users.map(u =>
        <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}
                                     alt="avatar"/></NavLink>
                        </div>
                        <div>{u.followed
                            ? <Button onClick={() => {
                                usersAPI.unFollowUser(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        onClickUnFollowHandler(u.id)
                                    }
                                })
                            }} variant="contained"
                                      href="#contained-buttons">Unfollow</Button>
                            : <Button onClick={() =>{
                                usersAPI.followUser(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        onClickFollowHandler(u.id)
                                    }
                                })
                                }} variant="contained"
                                      href="#contained-buttons">Follow</Button>}
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
        </div>)
    const mapPages = pages.map(p => {
        return <span key={p}>
            <ButtonGroup  variant={usersPage.currentPage === p ? 'contained' : 'text'}
                         aria-label="outlined primary button group"
                         onClick={() => onClickCurrentPageHandler(p)}>
                <Button>{p}</Button>
            </ButtonGroup>

        </span>

    })
    return (
        <div className={styles.container}>
            {usersPage.isFetching ? <Preloader/> : null}
            {mapUsers}
            <div>
                {mapPages}
            </div>
        </div>
    );
})
