import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import {AuthContext} from "../../../containers/App";
import Aux from '../../../hoc/Auxilliary'

class Person extends Component {
    constructor(props) {
        super(props);//needed!
        console.log(['Person'], props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("component mounted");
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        // not to be used for everything, but focus is a common usecase
        this.inputElement.current.focus();
    }

    render () {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p> I am authenticated</p> : null}
                </AuthContext.Consumer>

                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);