import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Mary', age: 25},
            {name: 'Steve', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log("was clicked");
        // this.state.persons[0].name = "Maximillian"; //DONT DO THIS
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Mary', age: 25},
                {name: 'Steve', age: 27}
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 25},
                {name: 'Steve', age: 26}
            ]
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        change={this.nameChangeHandler}
                        click={this.switchNameHandler.bind(this, 'Max!')}>Hobbies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hello!</h1>
                <p>This is really working.</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle persons
                </button>
                {persons}
            </div>
        );
        //   return React.createElement('div', {classname: 'App'}, React.createElement('h1', null, 'Hello there!'));
    }
}

export default App;
