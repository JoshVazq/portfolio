import { ContentfulEntry, ContentfulModel } from './contentful';

export class Skill extends ContentfulModel {
  name: string;
  level: number;
  constructor(id: string, name: string, level: number) {
    super(id);
    this.name = name;
    this.level = level;
  }
  static fromContentful(data: ContentfulEntry): Skill {
    const skill = new Skill(data.sys.id, data.fields.name, data.fields.level);
    return skill;
  }
}
