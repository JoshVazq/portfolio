
import React from "react";
import { Skill } from "model/skill";


type Props = {
  skills: Skill[]
};

const sortSkill = (a, b) => b.level - a.level;

const renderSkill = (skill: Skill) => {
  const percentage = `${skill.level}%`
  return (
    <div>
      <p>{skill.name}</p>
      <div class="w3-light-grey w3-round-xlarge w3-small">
        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: percentage }}  > {percentage}</div >
      </div >
    </div>)
};

export const TopSkillsBlock = ({ skills }: Props) => (
  <div>
    <p class="w3-large">
      <b>
        <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
        Top Skills
      </b>
    </p>
    {skills.sort(sortSkill).slice(0, 3).map(renderSkill)}
    <a href="#skills"> See more </a>

    <br />
  </div>

);
