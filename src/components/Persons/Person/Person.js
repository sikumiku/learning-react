import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);//needed!
        console.log(['Person'], props);
    }

    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("component mounted")
    }

    render () {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;