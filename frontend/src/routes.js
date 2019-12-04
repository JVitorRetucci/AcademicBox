import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/home.js';
import Main from './pages/main/main.js';
import Suggestion from './pages/suggestion/suggestion.js';
import Content from './pages/content/content.js';
import Register from './pages/register/register.js';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/main" component={Main} />
      <Route path="/suggestion" component={Suggestion} />
      <Route path="/register" component={Register} />
      <Route path="/contents/:id" component={Content} />
    </Switch>
  </BrowserRouter>
);

export default Routes;