import {ContentfulEntry} from './contentful';

export class Profile {
  id: string = "id";
  name: string= "name";
  static fromContentful(data: ContentfulEntry): Profile {
    const profile = new Profile();
    profile.id = data.sys.id;
    profile.name = data.fields.name;
    return profile;
  }
}
