import React from 'react';
import { Education } from 'model/education';
import { sortByFromDesc } from '../../../utils';

type Props = {
  education: Education[]
};

export const EducationBlock = ({ education }: Props) => (
  <div className="shadow-1  bg-white">
    <h2 className="w3-text-grey w3-padding-16">
      <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education
    </h2>
    {education.sort(sortByFromDesc).map((edu: Education) => (
      <div className="w3-container" key={edu.id}>
        <h5 className="w3-opacity">
          <b>{edu.degree}</b>
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right" />
          {edu.dates.toString()}
        </h6>
        <p>{edu.school}</p>
        <hr />
      </div>
    ))}
  </div>
);
