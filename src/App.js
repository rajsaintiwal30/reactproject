import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/usercomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>User database</h2>
        </div>
        <br/>
        <UserComponent/>
      </div>
    );
  }
}

export default App;
