export interface MediaMetadataType {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface MediaType {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetadataType[];
}

export interface ArticleType1 {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: MediaType[];
  eta_id: number;
}

export interface ArticleType {
  id: string;
  title: string;
  abstract: string;
  url: string;
}
