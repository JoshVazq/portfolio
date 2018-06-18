import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { PersonalInfo } from './index';
import { Profile } from "model/profile";
import { Asset } from "model/asset";



describe('PersonalInfo', () => {

    it('should render without crashing', () => {
        const profile = new Profile("");
        shallow(<PersonalInfo profile={profile} />);
    });
    it('should render the avatar', () => {
        let avatar = new Asset("");
        avatar.url = "avatar.png";
        const profile = new Profile("");
        profile.avatar = avatar;
        shallow(<PersonalInfo profile={profile} />);
    });
})