import { ContentfulEntry, ContentfulModel } from './contentful';

export class Asset extends ContentfulModel {
  title: string;
  description: string;
  url: string;

  static fromContentful(data: ContentfulEntry): Asset {
    const asset = new Asset(data.sys.id);
    asset.title = data.fields.title;
    asset.description = data.fields.description;
    asset.url = data.fields.file.url;
    return asset;
  }
}
