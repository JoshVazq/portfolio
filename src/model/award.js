import { ContentfulEntry, ContentfulModel } from './contentful';
import { Experience } from './experience';

export class Award extends ContentfulModel {
  title: string;
  position: Experience;
  issuer: string;

  static fromContentful(data: ContentfulEntry): Award {
    const award = new Award(data.sys.id);
    award.title = data.fields.title;
    award.position = Experience.fromContentful(data.fields.position);
    award.issuer = data.fields.issuer;
    return award;
  }
}
