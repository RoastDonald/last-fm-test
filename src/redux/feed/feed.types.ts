export enum FeedActionTypes {
  SET_FEED_DATA,
  SET_FEED_LOADING,
}

export type FeedTypes = { type: FeedActionTypes; payload?: any };
