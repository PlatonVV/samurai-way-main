import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/reduxStore';
import {FriendsType} from '../../reducers/sidebarReducer';


export const Sidebar = () => {
    const friends = useSelector<AppRootStateType, Array<FriendsType>>(state => state.sidebar.friends)
    let friendElements = friends.map(f => {
        return (
            <ul key={f.id}>
                <li>{f.name}</li>
            </ul>
        )
    })
    return (
        <>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                    <h1>Friends</h1>
                    <div>
                        {friendElements}
                    </div>

                </div>
            </nav>
        </>
    )

}
