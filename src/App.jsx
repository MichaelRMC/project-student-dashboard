import React from 'react';
import students from './data/data.json';
import StudentList from './components/StudentList'
import CohortList from './components/CohortList'

console.log(students);

function App() {
  return (
    <div className="container">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <StudentList students={students} />
    </div>
  );
}

export default App;
