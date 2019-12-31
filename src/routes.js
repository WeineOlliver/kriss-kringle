import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './screens/register';
import Krisskringle from './screens/krisskringle';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact>
          <Register />
        </Route>
        <Route path='/kriss-kringle'>
          <Krisskringle />
        </Route>
      </Router>
    );
  }
}
