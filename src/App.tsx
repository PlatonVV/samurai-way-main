import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import state from './redux/state';


function App() {

    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/69618898_2544647758928506_6865236701300654080_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=_D6bnUwgwmsAX8xbqNb&_nc_ht=scontent-lga3-2.xx&oh=00_AfCmeH15vml3r4oSge4vZVn4iqfE36e4zEywES-hc5XOJg&oe=63E19EBA"
                    alt="Ganesha"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div><img
                    src="https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="Bali"/></div>
                <div>
                    avatar + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>

        /*<BrowserRouter>
            <div className="App">
                {/!*<Route path={'/hello'} render={() => <HelloMessage message="HelloMessage"/>}/>*!/}
                {/!*<Route path={'/bye'} render={() => <ByeMessage message="Bye-Bye!!"/>}/>*!/}
            </div>
        </BrowserRouter>*/
    );
}

export default App;

