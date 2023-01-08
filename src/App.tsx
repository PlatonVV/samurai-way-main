import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import state from './redux/state';


function App() {

    type MessageType = {
        message: string;
    }

    const HelloMessage: React.FC<MessageType> = (props) => {
        return (
            <>
                <h1>{props.message}</h1>
            </>
        )
    }
    const ByeMessage: React.FC<MessageType> = (props) => {
        return (
            <>
                <h1>{props.message}</h1>
            </>
        )
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Route path={'/hello'} render={() => <HelloMessage message="HelloMessage"/>}/>
                <Route path={'/bye'} render={() => <ByeMessage message="Bye-Bye!!"/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
