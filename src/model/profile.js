import { ContentfulEntry, ContentfulModel } from './contentful';
import { Asset } from "./asset";
import { Skill } from "./skill";
import { Education } from "./education";
import { Experience } from "./experience";
import { Award } from "./award";
export class Profile extends ContentfulModel {
  name: string;
  avatar: Asset;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  awards: Award[];

  static fromContentful(data: ContentfulEntry): Profile {
    const profile = new Profile(data.sys.id);
    profile.name = data.fields.name;
    profile.avatar = Asset.fromContentful(data.fields.avatar);
    profile.skills = data.fields.skills.map((data) => Skill.fromContentful(data));
    profile.education = data.fields.education.map((data) => Education.fromContentful(data));
    profile.experience = data.fields.experience.map((data) => Experience.fromContentful(data));
    profile.awards = data.fields.awards.map((data) => Award.fromContentful(data));
    return profile;
  }
}
