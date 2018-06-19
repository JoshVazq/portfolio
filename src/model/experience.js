import { ContentfulEntry, ContentfulModel } from './contentful';
import { Period } from './period';
import { Location } from './location';

export class Experience extends ContentfulModel {
  title: string;
  company: string;
  description: string;
  location: Location;
  dates: Period;

  static fromContentful(data: ContentfulEntry): Experience {
    const experience = new Experience(data.sys.id);
    experience.title = data.fields.title;
    experience.company = data.fields.company;
    experience.description = data.fields.description;
    experience.dates = new Period(new Date(data.fields.from), new Date(data.fields.to));
    experience.location = new Location(data.fields.location.lat, data.fields.location.lon);

    return experience;
  }
}
