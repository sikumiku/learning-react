import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push( classes.red ); // class = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push( classes.bold ); // class = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons
            </button>
        </div>

    );
};

export default cockpit;