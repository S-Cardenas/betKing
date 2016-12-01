import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Dice from './dice/dice';

const Root = ({store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/bitcoindice" component={Dice}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
