
import React from "react";
import { Education } from "model/education";


type Props = {
  education: Education[]
};


export const EducationBlock = ({ education }: Props) => (

  <div className="w3-container w3-card w3-white w3-margin-bottom">
    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
    {education.map((edu: Education) => (
      <div className="w3-container" key={edu.id}>
        <h5 className="w3-opacity"><b>{edu.degree}</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{edu.dates.toString()}</h6>
        <p>{edu.school}</p>
        <hr />

      </div>

    ))}

  </div>
);