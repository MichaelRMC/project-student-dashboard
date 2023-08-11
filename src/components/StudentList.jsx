import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div className="studentList">
      {students.map((student) => 
        <StudentCard student={student}/>
      )}
    </div>
  );
}
export default StudentList;
