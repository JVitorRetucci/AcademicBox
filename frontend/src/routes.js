import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/home.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;