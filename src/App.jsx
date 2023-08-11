import React from "react";
import {useState} from 'react';
import "./App.css";
import students from "./data/data.json";
import StudentList from "./components/StudentList";
// import CohortList from "./components/CohortList";

function App() {
  const [selected, setSelected] = useState(false);


  function handleClick() {
    setSelected(!selected)
  }

  return (
    <div className="container">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <aside>
        <nav>
          {/* <CohortList cohorts={students} /> */}
        </nav>
      </aside>
      <StudentList students={students} />
    </div>
  );
}

export default App;
