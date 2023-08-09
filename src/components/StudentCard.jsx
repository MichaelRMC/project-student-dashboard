import React from "react";

const StudentCard = ({data}) => {
  return (
        <div className="studentCard">
          <img src={data.profilePhoto} />
          <h3>
            {data.names.preferredName} {data.names.surname}
          </h3>
          <span>{data.username}</span>
          <span>{data.dob}</span>
        </div>
        )
}

export default StudentCard