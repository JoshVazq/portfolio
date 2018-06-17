
import React from "react";
import { Education } from "model/education";


type Props = {
  education: Education[]
};


export const EducationBlock = ({ education }: Props) => (

  <div class="w3-container w3-card w3-white w3-margin-bottom">
    <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
    {education.map((edu: Education) => (
      <div class="w3-container">
        <h5 class="w3-opacity"><b>{edu.degree}</b></h5>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{edu.dates.toString()}</h6>
        <p>{edu.school}</p>
        <hr />

      </div>

    ))}

  </div>
);