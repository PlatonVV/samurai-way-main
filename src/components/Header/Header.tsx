import React, {useEffect} from 'react';
import s from './Header.module.css';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import styled from '@emotion/styled';
import {setIsFetchingAC} from '../../reducers/usersReducer';
import {useDispatch, useSelector} from 'react-redux';
import {initialStateAuthReducerType, setAuthUserDataAC} from '../../reducers/authReducer';
import {AppRootStateType} from '../../redux/reduxStore';
import {usersAPI} from '../../api/api';

export const Header = () => {
    const authData = useSelector<AppRootStateType, initialStateAuthReducerType>(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsFetchingAC(true))
        usersAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setIsFetchingAC(false))
                dispatch(setAuthUserDataAC({id, email, login, isAuth: true}));
            }
        })
    }, [])
    return (
        <>
            <header className={s.header}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6">
                        </Typography>
                        <NavWrapper><NavLink to={'/login'}><Button
                            color="inherit">{authData.data.isAuth ? authData.data.login : 'Login'}</Button></NavLink></NavWrapper>
                    </Toolbar>
                </AppBar>
            </header>
        </>
    )
}

const NavWrapper = styled.div`
  & > a {
    text-decoration: none;
    color: white;
  }
`