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
import {ActionsType, StoreType} from './generalTypes/GeneralTypes';

export type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<PropsType> = ({store, dispatch, ...props}) => {
    const state = store.getState() as any;

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sidebar={state.sidebarReducer}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={state.dialogsReducer}
                                                              dispatch={store.dispatch.bind(store)}/>}/>


                <Route path="/profile" render={() => <Profile profilePage={state.profileReducer}
                                                              dispatch={store.dispatch.bind(store)}/>}/>

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;

