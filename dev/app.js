import React from 'react';
import {render} from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Input from './components/input';
import Tracking from './components/tracking';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Input}/>
            <Route exact path='/tracking/:trackingCode' component={Tracking}/>
        </Switch>
    </div>
);

const App = () => {
    return (
        <div>
            <Main />
        </div>
    );
};

render(
    <HashRouter>
        <App />
    </HashRouter>
    ,
    document.querySelector("#container")

);