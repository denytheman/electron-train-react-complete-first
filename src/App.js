import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Kiki', age: 29},
      {name: 'Dan', age: 26},
    ]
  }

  switchNameHandler = () => {
    //console.log('clicked')
    //this.state.persons[0].name = "ass";
    this.setState( {
      persons: [
        {name: 'Maxi', age: 28},
        {name: 'Kiki', age: 29},
        {name: 'Dan', age: 33},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is some text</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!'));
  }
}

export default App;
