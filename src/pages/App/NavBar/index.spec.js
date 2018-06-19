import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { NavBar, mapStateToProps } from './index';
import { Profile } from 'model/profile';
import { Asset } from 'model/asset';

describe('NavBar', () => {
  it('should render without crashing', () => {
    const props = {
      avatar: undefined
    };
    shallow(<NavBar {...props} />);
  });

  it('should render the avatar', () => {
    let avatar = new Asset('');
    avatar.url = 'avatar.png';
    const profile = new Profile('');
    profile.avatar = avatar;
    shallow(<NavBar avatar={avatar} />);
  });

  it('shoulg get props from mapStateToProps', () => {
    const avatar = new Asset('');
    const profile = new Profile('');
    profile.avatar = avatar;
    const props = mapStateToProps({ profile });
    expect(props.avatar).toBe(avatar);
  });
});
