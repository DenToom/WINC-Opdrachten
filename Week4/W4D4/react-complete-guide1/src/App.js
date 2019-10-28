import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Martijn', age: 49 },
      { name: 'Tyn', age: 49 },
      { name: 'Anita', age: 53 }
    ]
  });

  const [otherState, setOtherState] = useState('Some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DON't Do THIS: this.state.persons[0].name = 'Martinus';
    setPersonsState({
      persons: [
        { name: 'Martinus', age: 49 },
        { name: 'Tyn', age: 49 },
        { name: 'Anita', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Cooking
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, 'Does this work now?')
  // );
};

export default app;
