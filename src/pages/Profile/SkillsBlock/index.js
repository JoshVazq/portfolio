import React from 'react';
import { Skill } from 'model/skill';

type Props = {
  skills: Skill[]
};

const renderSkill = (skill: Skill) => {
  const percentage = `${skill.level}%`;
  /* fl-l w5-l */
  return (
    <div className="ph3" key={skill.id}>
      <p>{skill.name}</p>
      <div className="bg-light-gray br-pill w3-small">
        <div className="ph3 pv1 tc f7 br-pill bg-teal" style={{ width: percentage }}>
          {percentage}
        </div>
      </div>
    </div>
  );
};
/* fl shadow-1 mv3  bg-white pa3
 */
export const SkillsBlock = ({ skills }: Props) => (
  <div className="shadow-1 mv3  bg-white pa3" id="skills">
    <h2 className="w3-text-grey w3-padding-16">
      <i className="fa fa-asterisk fa-fw mr3 w3-xxlarge teal" />Skills
    </h2>
    {skills.map(renderSkill)}
    <br />
  </div>
);
