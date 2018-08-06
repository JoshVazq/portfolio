import React from 'react';
import { Skill } from 'model/skill';

type Props = {
  skills: Skill[]
};

const sortSkill = (a, b) => b.level - a.level;

const renderSkill = (skill: Skill) => {
  const percentage = `${skill.level}%`;
  return (
    <div key={skill.id}>
      <p>{skill.name}</p>
      <div className="bg-light-gray br-pill w3-small">
        <div className="ph3 pv1 tc f7 br-pill bg-teal" style={{ width: percentage }}>
          {percentage}
        </div>
      </div>
    </div>
  );
};

export const TopSkillsBlock = ({ skills }: Props) => (
  <div>
    <p className="w3-large">
      <b>
        <i className="fa fa-asterisk  mr3 teal" />
        Top Skills
      </b>
    </p>
    {skills
      .sort(sortSkill)
      .slice(0, 2)
      .map(renderSkill)}
    <a href="#skills"> See more </a>

    <br />
  </div>
);
