import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { WorkBlock } from './index';
import { Experience } from 'model/experience';
import { Period } from 'model/period';

describe('WorkBlock', () => {
  it('should render without crashing', () => {
    const exp = new Experience('');
    exp.dates = new Period(new Date());
    exp.description = '';
    const experience = [exp];
    shallow(<WorkBlock experience={experience} />);
  });
});
