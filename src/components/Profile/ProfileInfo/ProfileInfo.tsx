import React, {useEffect} from 'react';
import s from './ProfileInfo.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/reduxStore';
import axios from 'axios';
import {setUserProfileAC, UserProfileType} from '../../../reducers/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {useParams} from 'react-router-dom';
import {ProfileParams} from '../Profile';


export const ProfileInfo = () => {
    const userProfile = useSelector<AppRootStateType, UserProfileType>(state => state.profilePage.profile)
    const dispatch = useDispatch()
    let {userId} = useParams<ProfileParams>()
    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }, [])

    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <>
            <div className={s.descriptionBlock}>
                <img src={userProfile?.photos?.large} alt="User profile"/>
                <div><h1>{userProfile.aboutMe}</h1></div>
                <div><h2>{userProfile.fullName}</h2></div>
            </div>
        </>
    )

}
