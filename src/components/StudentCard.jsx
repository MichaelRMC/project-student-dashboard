import React from "react";
import { useState } from "react";

const StudentCard = ({ student }) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const achievedGoalPercentage =
    (
      (student.codewars.current.total / student.codewars.goal.total) *
      100
    ).toFixed(0) + "%";
  const assignments = student.cohort.scores.assignments * 100 + "%";
  const projects = student.cohort.scores.projects * 100 + "%";
  const assessments = student.cohort.scores.assessments * 100 + "%";

  const resume = student.certifications.resume;
  const linkedin = student.certifications.linkedin;
  const github = student.certifications.github;
  const mockInterview = student.certifications.mockInterview;

  return (
    <div className="studentCardContainer">
      <img src={student.profilePhoto} />
      <div className>
        {" "}
        <h3 className="fullName">
          {student.names.preferredName} {student.names.surname}
        </h3>
        <p className="username">
          {student.username}
          <br />
        </p>
        <span className="birthday">Birthday: {student.dob}</span>
        <br />
        <button onClick={handleClick}>
          {showMore ? "Show Less..." : "Show More..."}
        </button>
      </div>

      {showMore && (
        <div className={`studentInfo ${showMore ? "expanded" : ""}`}>
          <div className="codewars">
            <ul><h4>Codewars:</h4></ul>
            <li>Total Score: {student.codewars.current.total}</li>
            <li>Last Week's Points: {student.codewars.current.lastWeek}</li>
            <li>Goal: {student.codewars.goal.total}</li>
            <li>Achieved Goal Percentage: {achievedGoalPercentage}</li>
          </div>
          <br />

          <div className="scores">
            <ul><h4>Scores:</h4></ul>
            <li>Assignments: {assignments}</li>
            <li>Projects: {projects}</li>
            <li>Assessments: {assessments}</li>
          </div>
          <br />
          <div className="certifications">
            <ul><h4>Certifications</h4></ul>
            <li>Resume: {resume === false ? <span>❌</span> : <span>✅</span>} </li>
            <li>LinkedIn: {linkedin === false ? <span>❌</span> : <span>✅</span>}</li>
            <li>Github: {github === false ? <span>❌</span> : <span>✅</span>}</li>
            <li>Mock Interview: {mockInterview === false ? <span>❌</span> : <span>✅</span>}</li>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
