import React, { Component } from 'react';
import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
import './App.css'

export class App extends Component {
  render() {
    return (
          <ViewTask />
    )
  }
}

export default App;
