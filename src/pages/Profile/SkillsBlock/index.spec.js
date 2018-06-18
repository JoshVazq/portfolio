import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { SkillsBlock } from './index';
import { Skill } from "model/skill";



describe('SkillsBlock', () => {

    it('should render without crashing', () => {
        const skill = new Skill("", "test", 100);
        const skills = [skill]
        shallow(<SkillsBlock skills={skills} />);
    });
})