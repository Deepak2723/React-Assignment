import React from 'react';
import Person from './components/person.js';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  const listItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Header title="My App Header" />
      <Person name="Deepak Singh" age={23} />
      <Button text="Click Me" onClick={() => console.log('Button clicked')} />
      <List items={listItems} />
    </div>
  );
};

export default App;

