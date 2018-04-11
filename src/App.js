import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Tasks from './containers/Tasks';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tasks/>      
      </Provider>
    );
  }
}

export default App;