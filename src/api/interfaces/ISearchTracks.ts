export interface OpensearchQuery {
  "#text": string;
  role: string;
  startPage: string;
}

export interface Image {
  "#text": string;
  size: string;
}

export interface Track {
  name: string;
  artist: string;
  url: string;
  streamable: string;
  listeners: string;
  image: Image[];
  mbid: string;
}

export interface Trackmatches {
  track: Track[];
}

export interface Attr {}

export interface Results {
  trackmatches: Trackmatches;
}

export interface ISearchTracksDTO {
  results: Results;
}
