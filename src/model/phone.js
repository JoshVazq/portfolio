import { ContentfulEntry, ContentfulModel } from './contentful';

export class Phone extends ContentfulModel {
  prefix: string;
  number: string;
  kind: string;

  static fromContentful(data: ContentfulEntry): Phone {
    const phone = new Phone(data.sys.id);
    phone.prefix = data.fields.prefix;
    phone.number = data.fields.number;
    phone.kind = data.fields.kind;
    return phone;
  }

  toString() {
    const prefix = (this.prefix && `+${this.prefix} `) || '';
    return `${prefix}${this.number}`;
  }
}
