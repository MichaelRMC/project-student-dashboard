import React from "react";
import {useState} from 'react';
import students from "./data/data.json";
import StudentList from "./components/StudentList";
import SideNavBar from "./components/SideNavBar";
import "./App.css";



function App() {
const [cohortTotal, setCohortTotal] = useState(students.length);



  return (
    <div className="container">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <aside>
      <SideNavBar students={students} />
      </aside>
      <StudentList students={students} />
    </div>
  );
}

export default App;
