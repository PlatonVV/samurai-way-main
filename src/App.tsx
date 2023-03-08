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
import {StoreType} from './redux/state';

export type PropsType = {
    store: StoreType
    addPostCallBack: ()=> void
    message: string
    updateNewPostText: (newText: string)=> void

}

const App = (props:PropsType) => {
    const state = props.store.getState();
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sidebar={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile message={props.message} profilePage={state.profilePage} addPostCallBack={props.addPostCallBack} updateNewPostText={props.updateNewPostText}/>}/>

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;

