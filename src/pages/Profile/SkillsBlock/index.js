
import React from "react";
import { Skill } from "model/skill";


type Props = {
  skills: Skill[]
};

const renderSkill = (skill: Skill) => {
  const percentage = `${skill.level}%`
  return (
    <div class="w3-container">
      <p>{skill.name}</p>
      <div class="w3-light-grey w3-round-xlarge w3-small">
        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: percentage }}  > {percentage}</div >
      </div >
    </div>
  )
};

export const SkillsBlock = ({ skills }: Props) => (
  <div class="w3-container w3-card w3-white w3-margin-bottom" id="skills">
    <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-asterisk fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Skills</h2>
    {skills.map(renderSkill)}
    <br />
  </div>

);
