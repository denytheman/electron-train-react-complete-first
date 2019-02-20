import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 'sdas1', name: 'Max', age: 28 },
      { id: 'sdas2', name: 'Kiki', age: 29 },
      { id: 's3', name: 'Dan', age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    // Can be used for performance improvements
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
    // Used for fetching the data from the server
  }

  deletePersonHandler = (personIndex) => {
    console.log('[App.js] deletePersonHandler');

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    console.log('[App.js] nameChangedHandler');

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  togglePersonHandler = () => {
    console.log('[App.js] togglePersonHandler');
    const doesShowPersons = this.state.showPersons;
    this.setState({
      showPersons: !doesShowPersons
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] rendering...');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
    }

    return (
      <React.Fragment>
        <button onClick={() =>
          this.setState({ showCockpit: false })
        }>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler} />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!'));
  }
}

export default withClass(App, classes.App);
