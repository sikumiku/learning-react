import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <p>This is really working.</p>
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
    //   return React.createElement('div', {classname: 'App'}, React.createElement('h1', null, 'Hello there!'));
  }
}

export default App;
