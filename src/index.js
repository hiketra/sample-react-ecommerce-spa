import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import HomePage from './homepage.component'

const HatsPage = () => (
    <div>
    <h1>Hats Page</h1>
    </div>
)

function App() {
    return(
        <div>
        <Switch>
            <Route exact path ='/' component={HomePage} />
            <Route exact path ='/hats' component={HatsPage} />
        </Switch>
        </div>
    )
}


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
