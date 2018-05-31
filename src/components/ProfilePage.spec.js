import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { ProfilePage, mapStateToProps } from './ProfilePage';
import { Profile } from "../model/profile";



describe('ProfilePage', () => {
    it('should call fetchProfile on componentDidMount', () => {
        const profile = new Profile("");
        const fetchProfile = jest.fn();
        const props = { profile, fetchProfile };
        shallow(<ProfilePage {...props} />);
        expect(fetchProfile).toHaveBeenCalled();
    });

    it('shoulg get props from mapStateToProps', () => {
        const profile = new Profile("");
        const props = mapStateToProps({ profile })
        expect(props.profile).toBe(profile);
    });
})