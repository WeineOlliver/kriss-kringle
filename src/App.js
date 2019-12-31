import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
