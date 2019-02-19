import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'sdas1', name: 'Max', age: 28},
      { id: 'sdas2', name: 'Kiki', age: 29},
      { id: 's3', name: 'Dan', age: 26},
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    });
  }

  togglePersonHandler = () => {
    this.setState( {
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'white'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
        classes.push('red');
    }
    if(this.state.persons.length <= 1){
        classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <p className={classes.join(' ')}>This is some text</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!'));
  }
}

export default Radium(App);
