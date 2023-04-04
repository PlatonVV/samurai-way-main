import React, {useEffect} from 'react';
import s from './ProfileInfo.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/reduxStore';
import axios from 'axios';
import {setUserProfileAC, UserProfileType} from '../../../reducers/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';


export const ProfileInfo = () => {
    const userProfile = useSelector<AppRootStateType, UserProfileType>(state => state.profilePage.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }, [])

    if(!userProfile) {
        return <Preloader/>
    }
    return (
        <><img
            src="https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Bali"/>
            <div className={s.descriptionBlock}>
                <img src={userProfile?.photos?.large} alt="User profile"/>
                <div><h1>{userProfile.aboutMe}</h1></div>
                <div><h2>{userProfile.fullName}</h2></div>
            </div>
        </>
    )
}
