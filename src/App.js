import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Max', age: 28},
        { name: 'Mary', age: 25},
        { name: 'Steve', age: 26}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <p>This is really working.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //   return React.createElement('div', {classname: 'App'}, React.createElement('h1', null, 'Hello there!'));
  }
}

export default App;
