import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {store } from './redux/state'

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}  />
        </BrowserRouter>, document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();