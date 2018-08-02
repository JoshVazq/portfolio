import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Experience } from 'model/experience';
import { sortByFromDesc, markDownOptions } from '../../../utils';

type Props = {
  experience: Experience[]
};

function renderExperienceList(list) {
  const lastIndex = list.length - 1;

  return list.sort(sortByFromDesc).map((experience: Experience, i) => (
    <div className={'ph3' + (lastIndex !== i ? ' bb b--light-gray' : '')} key={experience.id}>
      <h3 className="fw4 w3-opacity">
        {experience.title} / {experience.company}
      </h3>
      <h4 className="teal">
        <i className="fa fa-calendar fa-fw mr3" />
        {experience.dates.toString()}
      </h4>
      {experience.description && (
        <Markdown options={markDownOptions}>{experience.description}</Markdown>
      )}
    </div>
  ));
}

export const WorkBlock = ({ experience }: Props) => (
  <div className="shadow-1  bg-white pa3 mb3">
    <h2 className="mt0">
      <i className="fa fa-suitcase fa-fw mr3 w3-xxlarge teal" />
      Work Experience
    </h2>
    {renderExperienceList(experience)}
  </div>
);
