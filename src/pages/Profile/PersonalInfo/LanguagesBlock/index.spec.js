import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { LanguagesBlock } from './index';



describe('LanguagesBlock', () => {

    it('should render without crashing', () => {
        shallow(<LanguagesBlock />);
    });
})