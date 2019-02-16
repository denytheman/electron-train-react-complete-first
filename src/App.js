import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Kiki', age: 29},
      {name: 'Dan', age: 26},
    ]
  })

  const switchNameHandler = () => {
    //console.log('clicked')
    //this.state.persons[0].name = "ass";
    setPersonsState( {
      persons: [
        {name: 'Maxi', age: 28},
        {name: 'Kiki', age: 29},
        {name: 'Dan', age: 33},
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi</h1>
      <p>This is some text</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}/>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
