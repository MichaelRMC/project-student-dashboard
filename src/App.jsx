import React from 'react';
import StudentList from './components/StudentList'
import students from './data/data.json' 

console.log(data);

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <StudentList />
    </div>
  );
}

export default App;
