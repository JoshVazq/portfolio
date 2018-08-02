import React from 'react';
import { Education } from 'model/education';
import { sortByFromDesc } from '../../../utils';

type Props = {
  education: Education[]
};
function renderEducationList(list) {
  const lastIndex = list.length - 1;
  return list.sort(sortByFromDesc).map((education: Education, i) => (
    <div className={'ph3' + (lastIndex !== i ? ' bb b--light-gray' : '')} key={education.id}>
      <h3 className="fw4 w3-opacity">
        <b>{education.degree}</b>
      </h3>
      <h4 className="teal">
        <i className="fa fa-calendar fa-fw mr3" />
        {education.dates.toString()}
      </h4>
      <h4 className="teal">
        <i className="fa fa-building fa-fw mr3" />
        {education.school}
      </h4>
      {/* <p>{education.description}</p> */}
    </div>
  ));
}
export const EducationBlock = ({ education }: Props) => (
  <div className="shadow-1  bg-white pa3 mv3">
    <h2 className="w3-text-grey w3-padding-16">
      <i className="fa fa-graduation-cap fa-fw mr3 w3-xxlarge teal" />Education
    </h2>
    {renderEducationList(education)}
  </div>
);
