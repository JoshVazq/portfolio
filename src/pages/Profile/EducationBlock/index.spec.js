import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { EducationBlock } from './index';
import { Education } from "model/education";
import { Period } from "model/Period";



describe('EducationBlock', () => {

    it('should render without crashing', () => {
        const edu = new Education("");
        edu.dates = new Period(new Date());
        const education = [edu]
        shallow(<EducationBlock education={education} />);
    });
})