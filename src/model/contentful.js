export class ContentfulEntrySys {
  id: string;
}

export class ContentfulEntry {
  sys: ContentfulEntrySys;
  fields: any;
}
export class ContentfulModel {
  id: string;
  constructor(id: string) {
    this.id = id;
  }

}