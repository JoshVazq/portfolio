import { Profile } from "./profile";
import { Asset } from "./asset";
import { Skill } from "./skill";
import { Education } from "./education";
import { Experience } from "./experience";
import { Award } from "./award";

import resolveResponse from "contentful-resolve-response";
import * as contentfulFixure from "../test/fixtures/contentful/entries_profile.json";
import * as profileFixure from "../test/fixtures/profile.json";
import { Period } from "./period";
describe('model', () => {
    describe('Profile ', () => {
        it(' Profile.fromContentful shoul return the expected instance', () => {
            const profileData = resolveResponse(contentfulFixure)[0];
            const normalizedProfile = JSON.parse(JSON.stringify(Profile.fromContentful(profileData)));
            for (const prop in normalizedProfile) {
                expect(normalizedProfile[prop]).toEqual(profileFixure[prop]);
            }
        })
        it(' Profile.fromContentful shoul call fromContentful of other entities', () => {
            const fromContentfulSpy = jest.spyOn(Profile, 'fromContentful');

            const fromContentfulAssetSpy = jest.spyOn(Asset, 'fromContentful');
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
            expect(fromContentfulSkillSpy).toHaveBeenCalledTimes(5);
            expect(fromContentfulEducationSpy).toHaveBeenCalledTimes(2);
            expect(fromContentfulExperienceSpy).toHaveBeenCalledTimes(1);
            expect(fromContentfulAwardSpy).toHaveBeenCalledTimes(1);

        })

    })
    describe('Period ', () => {
        it(' toString should return from to dates', () => {
            const period = new Period(new Date(2012, 2), new Date(2013, 3));
            const periodString = period.toString();
            expect(periodString).toEqual("Mar 2012 - Apr 2013");
        })
        it(' toString should return only one date if there is not to', () => {
            const period = new Period(new Date(2012, 2));
            const periodString = period.toString();
            expect(periodString).toEqual("Mar 2012 - ");
        })

    })
})