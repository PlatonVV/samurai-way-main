import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {RootStateType} from './redux/state';

export type PropsType = {
    state: RootStateType
}

const App = (props:PropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

        /*<BrowserRouter>
            <div className="App">
                {/!*<Route path={'/hello'} render={() => <HelloMessage message="HelloMessage"/>}/>*!/}
                {/!*<Route path={'/bye'} render={() => <ByeMessage message="Bye-Bye!!"/>}/>*!/}
            </div>
        </BrowserRouter>*/
    );
}

export default App;

