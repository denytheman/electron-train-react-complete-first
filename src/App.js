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

  switchNameHandler = (newName) => {
    //console.log('clicked')
    //this.state.persons[0].name = "ass";
    this.setState( {
      persons: [
        {name: newName, age: 28},
        {name: 'Kiki', age: 29},
        {name: 'Dan', age: 33},
      ]
    });
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

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is some text</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        { this.state.showPersons ? <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Maxi!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div> : null
      }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!'));
  }
}

export default App;
