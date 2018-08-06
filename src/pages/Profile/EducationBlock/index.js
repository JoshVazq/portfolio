import React from 'react';
import { Education } from 'model/education';
import { sortByFromDesc } from '../../../utils';

type Props = {
  education: Education[]
};
function renderEducationList(list) {
  return list.sort(sortByFromDesc).map((education: Education, i) => (
    <div key={education.id} className="mb2 flex flex-column flex-row-l">
      <div className="ph4 w-25-l">
        <h4 className="fw7 f4 mt4-l">{education.degree}</h4>
        <h4 className="fw4">
          <i className="fa fa-calendar  mr3" />
          {education.dates.toString()}
        </h4>
      </div>
      <div className="ph4 w-75-l">
        <h4 className="teal">
          <i className="fa fa-building  mr3" />
          {education.school}
        </h4>
      </div>
      {/* <p>{education.description}</p> */}
    </div>
  ));
}
export const EducationBlock = ({ education }: Props) => (
  <div className="mv3 center mw1100px">
    <h3 className="teal normal f3 fw1 teal pl4">
      <i className="fa fa-graduation-cap  mr3 w3-xxlarge teal" />
      Education
    </h3>
    {renderEducationList(education)}
  </div>
);
