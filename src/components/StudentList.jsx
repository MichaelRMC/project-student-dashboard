import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ data }) {
  return (
    <div className="studentList">
      {data.map((data) => 
        <StudentCard student={data}/>
      )}
    </div>
  );
}
export default StudentList;
