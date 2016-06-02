import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import Home from './components/Home'
import Contact from './components/Contact'

export default (
  <Route path="/" component={App}>
    <Route path="contact" component={Contact} />
    <IndexRoute component={Home} />
  </Route>
)