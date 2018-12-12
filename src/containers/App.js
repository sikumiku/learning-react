import React, {Component} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBounday from '../components/ErrorBoundary/ErrorBoundary';

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

        this.setState({persons: persons})
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
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            change={(event) => this.nameChangeHandler(event, person.id)}/>
                        </ErrorBoundary>
                    })}
                </div>
            );

            btnClass = classes.Red
        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push( classes.red ); // class = ['red']
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push( classes.bold ); // class = ['red', 'bold']
        }

        return (
                <div className={classes.App}>
                    <h1>Hello!</h1>
                    <p className={assignedClasses.join(' ')}>This is really working.</p>
                    <button
                        className={btnClass}
                        onClick={this.togglePersonsHandler}>Toggle persons
                    </button>
                    {persons}
                </div>
        );
        //   return React.createElement('div', {classname: 'App'}, React.createElement('h1', null, 'Hello there!'));
    }
}

export default App;
