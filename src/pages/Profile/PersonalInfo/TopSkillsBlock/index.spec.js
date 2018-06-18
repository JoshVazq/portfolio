import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { TopSkillsBlock } from './index';
import { Skill } from "model/skill";



describe('TopSkillsBlock', () => {

    it('should render without crashing', () => {
        const skills = [new Skill("", "test", 100), new Skill("", "test", 80)]
        shallow(<TopSkillsBlock skills={skills} />);
    });
})