import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {addPost, RootStateType} from './redux/state'

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallBack={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}