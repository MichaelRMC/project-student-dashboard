import React from "react";

const StudentCard = ({student, handleClick}) => {
  return (
        <div className="studentCard">
          <img src={student.profilePhoto} />
          <h3>{student.names.preferredName} {student.names.surname}</h3>
          <p>{student.username}</p>
          <span>Birthday: {student.dob}</span>
          <br />
          <button onClick={handleClick}>Show More...</button>
          
          
          {selected ? 
         <ul className={student.codewars}>
          <h4>Codewars:</h4>
          <li>Total Score:{student.codewars.current.total}</li>
          <li>Last Week's Points:{student.codewars.current.lastWeek}</li>
          <li>Goal:{student.codewars.goal.total}</li>
          <li>{(student.codewars.current.total / student.codewars.goal.total * 100).toFixed(0)}%</li>
         </ul>
         <ul>
          <li></li>
         </ul>
         : <></> }
        </div>
        )
}

export default StudentCard