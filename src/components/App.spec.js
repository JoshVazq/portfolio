import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';


describe('App', () => {

    it('renders without crashing', () => {
        shallow(<App isLoading="true" />);
    });

    it('shoulg get props from mapStateToProps', () => {
        const props = mapStateToProps({ ui: { loading: true } })
        expect(props.isLoading).toBe(true);
    });
})