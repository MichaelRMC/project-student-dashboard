import React from "react";

const Cohort = ({ students }) => {
  
  const cohortCount = students.reduce((accumulator, student) => {
    const cohortYear = student.cohort.cohortCode;

    if (cohortYear in accumulator) {
      accumulator[cohortYear]++;
    } else {
      accumulator[cohortYear] = 1;
    }

    return accumulator;
  }, []);
console.log(cohortCount);
  const cohortList = Object.keys(cohortCount);
  
  const cohortMap = cohortList.map((cohortListItem) => {
    let formattedStr = cohortListItem.replace(/([a-zA-Z])(\d+)/, "$1 $2");
      return (<>
               <div>
                <h2>{formattedStr}</h2>
                <hr />
               </div>

              </>);
    })
  return (
    <>
      <section>
        <a href={`/${cohortMap}`} key={cohortMap}>
          {cohortMap}
        </a>
        
      </section>
    </>
  );
};

export default Cohort;
