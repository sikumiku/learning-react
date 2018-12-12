import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary'

export const AuthContext = React.createContext(false);

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
            showPersons: false,
            toggleClicked: 0,
            authenticated: false
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
        this.setState( (prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    };

    loginHandler = () => {
        this.setState({authenticated: true});
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
            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}/>
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
