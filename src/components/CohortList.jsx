import React from "react";


const CohortList = ({ students }) => {
  const cohortCount = students.reduce((accumulator, student) => {
    const cohortYear = student.cohort.cohortCode;

    if (cohortYear in accumulator) {
      accumulator[cohortYear]++;
    } else {
      accumulator[cohortYear] = 1;
    }

    return accumulator;
  }, {});

  const cohorts = Object.keys(cohortCount);

  return (
    <>
      {cohorts.map((cohort) => (
        <a href={cohort}>{cohort}</a>
      ))}
    </>
  );
};

export default CohortList;
