import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LandingPage from './pages/LandingPage'
import ActivityPage from './pages/ActivityPage';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const routing =(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={ActivityPage} />
                <Route path="/activity" component={LandingPage} />
                <Route path="/findActivities" component={App} /> 
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
