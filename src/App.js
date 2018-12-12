import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: '123', name: 'Max', age: 28},
            {id: '124', name: 'Mary', age: 25},
            {id: '125', name: 'Steve', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex] // to avoid muting, use spread, modern approach
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} )
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // more modern approach
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            change={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );

            style.backgroundColor = 'red';
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
