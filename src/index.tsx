import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {store } from './redux/state'

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPostCallBack={store.addPost.bind(store)} message={store._state.profilePage.newPostText} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();