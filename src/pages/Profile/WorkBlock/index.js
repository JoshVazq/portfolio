import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Experience } from 'model/experience';
import { sortByFromDesc } from '../../../utils';

type Props = {
  experience: Experience[]
};

export const WorkBlock = ({ experience }: Props) => (
  <div className="shadow-1  bg-white">
    <h2 className="mt0">
      <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
      Work Experience
    </h2>
    {experience.sort(sortByFromDesc).map(work => (
      <div className="w3-container" key={work.id}>
        <h5 className="w3-opacity">
          <b>
            {work.title} / {work.company}
          </b>
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right" />
          {work.dates.toString()}
        </h6>
        {work.description && <Markdown>{work.description}</Markdown>}
        <hr />
      </div>
    ))}
  </div>
);
