import { Profile } from './profile';
import { Asset } from './asset';
import { Skill } from './skill';
import { Education } from './education';
import { Experience } from './experience';
import { Award } from './award';
import { Phone } from './phone';

import resolveResponse from 'contentful-resolve-response';
import * as contentfulFixure from '../test/fixtures/contentful/entries_profile.json';
import * as profileFixure from '../test/fixtures/profile.json';
import { Period } from './period';
describe('model', () => {
  describe('Profile ', () => {
    it(' Profile.fromContentful shoul return the expected instance', () => {
      const profileData = resolveResponse(contentfulFixure)[0];
      const normalizedProfile = JSON.parse(JSON.stringify(Profile.fromContentful(profileData)));
      for (const prop in normalizedProfile) {
        expect(normalizedProfile[prop]).toEqual(profileFixure[prop]);
      }
    });
    it(' Profile.fromContentful shoul call fromContentful of other entities', () => {
      const fromContentfulSpy = jest.spyOn(Profile, 'fromContentful');

      const fromContentfulAssetSpy = jest.spyOn(Asset, 'fromContentful');
      fromContentfulAssetSpy.mockImplementation(() => null);

      const fromContentfulPhoneSpy = jest.spyOn(Phone, 'fromContentful');
      fromContentfulAssetSpy.mockImplementation(() => null);

      const fromContentfulSkillSpy = jest.spyOn(Skill, 'fromContentful');
      fromContentfulSkillSpy.mockImplementation(() => null);

      const fromContentfulEducationSpy = jest.spyOn(Education, 'fromContentful');
      fromContentfulEducationSpy.mockImplementation(() => null);

      const fromContentfulExperienceSpy = jest.spyOn(Experience, 'fromContentful');
      fromContentfulExperienceSpy.mockImplementation(() => null);

      const fromContentfulAwardSpy = jest.spyOn(Award, 'fromContentful');
      fromContentfulAwardSpy.mockImplementation(() => null);

      const profileData = resolveResponse(contentfulFixure)[0];
      const normalizedProfile = JSON.parse(JSON.stringify(Profile.fromContentful(profileData)));

      expect(fromContentfulSpy).toHaveBeenCalled();
      expect(fromContentfulAssetSpy).toHaveBeenCalledTimes(1);
      expect(fromContentfulPhoneSpy).toHaveBeenCalledTimes(1);
      expect(fromContentfulSkillSpy).toHaveBeenCalledTimes(5);
      expect(fromContentfulEducationSpy).toHaveBeenCalledTimes(2);
      expect(fromContentfulExperienceSpy).toHaveBeenCalledTimes(1);
      expect(fromContentfulAwardSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('Period ', () => {
    const intl = new Intl.DateTimeFormat([], { year: 'numeric', month: 'short' });
    it(' toString should return from to dates', () => {
      const from = new Date(2012, 2);
      const to = new Date(2013, 3);
      const period = new Period(from, to);
      const periodString = period.toString();
      //intl/localstring does not work well with node
      expect(periodString).toEqual(`${intl.format(from)} - ${intl.format(to)}`);
    });
    it(' toString should return only one date if there is not to', () => {
      const from = new Date(2012, 2);
      const period = new Period(from);
      const periodString = period.toString();
      expect(periodString).toEqual(`${intl.format(from)} - present`);
    });
  });
  describe('Phone ', () => {
    it(' toString should return the phone with prefix', () => {
      const phone = new Phone('');
      phone.prefix = '34';
      phone.number = '111111111';
      const number = phone.toString();
      expect(number).toEqual(`+${phone.prefix} ${phone.number}`);
    });
    it(' toString should return the phone without prefix', () => {
      const phone = new Phone('');
      phone.number = '111111111';
      const number = phone.toString();
      expect(number).toEqual(`${phone.number}`);
    });
  });
});
