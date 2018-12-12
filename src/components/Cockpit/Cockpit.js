import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Auxilliary'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;
    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 2) {
        assignedClasses.push( classes.red ); // class = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push( classes.bold ); // class = ['red', 'bold']
    }

    // Aux is good to use if you dont want to just create a wrapping div
    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons
            </button>
        </Aux>
    );
};

export default cockpit;