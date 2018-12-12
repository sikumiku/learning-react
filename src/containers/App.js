import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

    constructor(props) {
        super(props);//needed!
        console.log(['dsfsdfdsf'], props);
        this.state = {
            persons: [
                {id: '123', name: 'Max', age: 28},
                {id: '124', name: 'Mary', age: 25},
                {id: '125', name: 'Steve', age: 26}
            ],
            otherState: 'some other value',
            showPersons: false
        };
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    // this works in modern apps
    // state = {
    //     persons: [
    //         {id: '123', name: 'Max', age: 28},
    //         {id: '124', name: 'Mary', age: 25},
    //         {id: '125', name: 'Steve', age: 26}
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // };

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
        console.log("app renders in app");
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>;
        }

        return (
                <div className={classes.App}>
                    <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                    <Cockpit
                        appTitle={this.props.title}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {persons}
                </div>
        );
        //   return React.createElement('div', {classname: 'App'}, React.createElement('h1', null, 'Hello there!'));
    }
}

export default App;
