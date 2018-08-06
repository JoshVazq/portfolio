import React from 'react';
import { Skill } from 'model/skill';
import './style.css';

type Props = {
  skills: Skill[]
};

const starClasses = ['fa fa-star', 'fa fa-star-half-alt', 'far fa-star'];
/* 
const renderPercentage = (name, level) => {
  const percentage = `${level}%`;

  return (
    <div>
      <p>{name}</p>,
      <div className="bg-light-gray br-pill w3-small">
        <div className="ph3 pv1 tc f7 br-pill bg-teal" style={{ width: percentage }}>
          {percentage}
        </div>
      </div>
    </div>
  );
}; */

const levelToStars = level => Math.round(((level * 5) / 100) * 2) / 2; //(level * 5) / 100;
const getStars = level => {
  // TODO: Improve algorithm
  const scale5 = levelToStars(level);
  const filled = Math.floor(scale5);
  let empty = [],
    half = [];
  if (filled < 4) {
    empty = new Array(5 - filled).fill(2);
  }
  if (!empty.length && filled < 5) {
    half = [1];
  }
  return [...new Array(filled).fill(0), ...half, ...empty];
};
const renderStar = (id, name, level) => {
  const stars = getStars(level);
  return (
    <div className="flex f4 justify-between items-center">
      {/*  f2-ns */}
      <span className="dib fw2">{name}</span>
      <div className="fw2 w4 flex justify-around">
        {/*  w5-ns */}
        {stars.map((type, i) => (
          <i key={'rating-' + id + '-' + i} className={'teal ' + starClasses[type]} />
        ))}
      </div>
    </div>
  );
};

const renderSkill = (skill: Skill) => {
  /* fl-l w5-l */
  return (
    <li className="hover-bg-light-gray pa1" key={skill.id}>
      {renderStar(skill.id, skill.name, skill.level)}
      {/* renderPercentage(skill.name, skill.level) */}
    </li>
  );
};
/* fl shadow-1 mv3  bg-white pa3
 */
export const SkillsBlock = ({ skills }: Props) => (
  <div className="mv3  bg-white ph3 center-l w-90-l" id="skills">
    <h3 className="teal normal f3 fw1 teal">
      <i className="fa fa-asterisk  mr3 w3-xxlarge teal" />
      Skills
    </h3>
    <ul className="list pl0">{skills.map(renderSkill)}</ul>
    <br />
  </div>
);
