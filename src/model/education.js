import { ContentfulEntry, ContentfulModel } from './contentful';
import { Period } from './period';

export class Education extends ContentfulModel {
  school: string;
  degree: string;
  dates: Period;

  static fromContentful(data: ContentfulEntry): Education {
    const education = new Education(data.sys.id);
    education.school = data.fields.school;
    education.degree = data.fields.degree;
    education.dates = new Period(new Date(data.fields.from), new Date(data.fields.to));
    return education;
  }
}
