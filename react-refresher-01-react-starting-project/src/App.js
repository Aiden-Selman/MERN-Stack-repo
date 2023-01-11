import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

//const App = () => {
//  return <h1 title='This works'>Hi, <span>this</span> is React!</h1>; // => React.createElement('h1', {title: 'This works'}, ...)
//  // Code below will yield same result as code above. However this method of coding is more cumbersome.
//  //return React.createElement('h1', {}, 'Hi, this is React!');
//};

const App = () => {
  return <div>
    <h2 className="course-goals">Course Goals</h2>
    <GoalList />
  </div>
}

export default App;
