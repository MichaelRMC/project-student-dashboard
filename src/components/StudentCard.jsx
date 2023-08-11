import React from "react";
import "../App.css"
const StudentCard = ({student}) => {
  return (
        <div className="studentCard">
          <img src={student.profilePhoto} />
          <h3>{student.names.preferredName} {student.names.surname}</h3>
          <p>{student.username}</p>
          <span>Birthday: {student.dob}</span>
          <br />
          <button>Show More...</button>
        </div>
        )
}

export default StudentCard