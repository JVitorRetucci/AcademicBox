import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/home.js';
import Main from './pages/main/main.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
        </Switch>
    </BrowserRouter>
);

export default Routes;