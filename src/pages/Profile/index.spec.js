import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { ProfilePage, mapStateToProps } from './index';
import { Profile } from 'model/profile';

describe('ProfilePage', () => {
  it('should call fetchProfile on componentDidMount', () => {
    const profile = new Profile('');
    const fetchProfile = jest.fn();
    const props = { profile, fetchProfile };
    shallow(<ProfilePage {...props} />);
    expect(fetchProfile).toHaveBeenCalled();
  });

  it('shoulg get props from mapStateToProps', () => {
    const profile = new Profile('');
    const props = mapStateToProps({ profile });
    expect(props.profile).toBe(profile);
  });
  describe('render', () => {
    it('shoulg render without crashing', () => {
      const profile = new Profile('');
      const fetchProfile = jest.fn();
      const props = { profile, fetchProfile };
      shallow(<ProfilePage {...props} />);
    });
    it('shoulg not render if there is not profile', () => {
      const profile = undefined;
      const fetchProfile = jest.fn();
      const props = { profile, fetchProfile };
      const element = shallow(<ProfilePage {...props} />);
      expect(element.type()).toBeNull();
    });
  });
});
