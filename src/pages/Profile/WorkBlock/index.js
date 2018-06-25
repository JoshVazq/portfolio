import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Experience } from 'model/experience';

type Props = {
  experience: Experience[]
};

export const WorkBlock = ({ experience }: Props) => (
  <div className="w3-container w3-card w3-white w3-margin-bottom">
    <h2 className="w3-text-grey w3-padding-16">
      <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
      Work Experience
    </h2>
    {experience.map(work => (
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
        <Markdown>{work.description}</Markdown>
        <hr />
      </div>
    ))}
  </div>
);
