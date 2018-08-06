import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Experience } from 'model/experience';
import { Link } from 'model/link';
import { sortByFromDesc } from '../../../utils';

type Props = {
  experience: Experience[]
};

function renderExperienceList(list) {
  return list.sort(sortByFromDesc).map((experience: Experience, i) => (
    <div key={experience.id} className="mb2 flex flex-column flex-row-l">
      <div className="ph4 w-25-l">
        <h4 className="fw7 f4 mt4-l">{experience.company}</h4>
        <h4 className="fw4">
          <i className="fa fa-calendar  mr3" />
          {experience.dates.toString()}
        </h4>
      </div>
      <div className="ph4 w-75-l">
        <h4 className="fw7 mt4-l">{experience.title}</h4>
        {experience.description && (
          <Markdown className="db" /* options={markDownOptions} */>
            {experience.description}
          </Markdown>
        )}
        {experience.links && (
          <div className="mt4">
            {experience.links.map((link: Link, index) => (
              <a
                key={experience.id + '-link-' + index}
                className="teal db mb1"
                href={link.url}
                target="_blank">
                <i className="fa fa-link mr1" />
                {link.url}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  ));
}

export const WorkBlock = ({ experience }: Props) => (
  <div className="bb pb4 b--moon-gray center mw1100px">
    <h3 className="teal normal f3 fw1 teal pl4">
      <i className="fa fa-suitcase  mr3 w3-xxlarge" />
      Work Experience
    </h3>
    {renderExperienceList(experience)}
  </div>
);
