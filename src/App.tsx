import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {RootStateType} from './redux/state';
export type PropsType = {
    state: RootStateType
    addPostCallBack: ()=> void
    message: string
    updateNewPostText: (newText: string)=> void
}

const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile message={props.message} profilePage={props.state.profilePage} addPostCallBack={props.addPostCallBack} updateNewPostText={props.updateNewPostText}/>}/>

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;

