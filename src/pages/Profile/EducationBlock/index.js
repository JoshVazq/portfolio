import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Education } from 'model/education';
import { sortByFromDesc } from '../../../utils';

type Props = {
  education: Education[]
};
function renderEducationList(list) {
  return list.sort(sortByFromDesc).map((education: Education, i) => (
    <div key={education.id} className="mb2 flex flex-column flex-row-l justify-between-l">
      <div className="w-30-l">
        <h4 className="fw7 f4 mt4-l mid-gray">{education.degree}</h4>
        <h4 className="fw4">
          <i className="fa fa-calendar  mr3" />
          {education.dates.toString()}
        </h4>
      </div>
      <div className="w-60-l">
        <h4 className="fw7 mt4-l">
          <i className="fa fa-building  mr3" />
          {education.school}
        </h4>
        {education.description && (
          <Markdown className="db list pl0" /* options={markDownOptions} */>
            {education.description}
          </Markdown>
        )}
      </div>
    </div>
  ));
}
export const EducationBlock = ({ education }: Props) => (
  <div className="mv3 ph4 center-l w-90-l">
    <h3 className="teal normal f3 fw1 teal">
      <i className="fa fa-graduation-cap  mr3 w3-xxlarge teal" />
      Education
    </h3>
    {renderEducationList(education)}
  </div>
);
