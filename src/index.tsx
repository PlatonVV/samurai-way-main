import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {addPost, state, subscribe, updateNewPostText} from './redux/state'

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallBack={addPost} message={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree();
subscribe(rerenderEntireTree);