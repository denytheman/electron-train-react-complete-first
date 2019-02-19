import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Kiki', age: 29},
      {name: 'Dan', age: 26},
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Dan', age: 33},
      ]
    });
  }

  togglePersonHandler = () => {
    this.setState( {
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map( (person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}/>
        })}

        </div>
      )
    }

    //   click={this.switchNameHandler.bind(this, 'Maxi!')}
    //   changed={this.nameChangedHandler}>My Hobbies: Racing</Person>

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is some text</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!'));
  }
}

export default App;
