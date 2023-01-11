import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

//const App = () => {
//  return <h1 title='This works'>Hi, <span>this</span> is React!</h1>; // => React.createElement('h1', {title: 'This works'}, ...)
//  // Code below will yield same result as code above. However this method of coding is more cumbersome.
//  //return React.createElement('h1', {}, 'Hi, this is React!');
//};

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: "Finish the Course"},
    {id: 'cg2', text: "Learn all about the course main topic"},
    {id: 'cg3', text: "Help other the students in the course Q&A"},
  ]);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  }
  
  return <div>
    <h2 className="course-goals">Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler} />
    <GoalList goals={courseGoals} />
  </div>
}

export default App;
