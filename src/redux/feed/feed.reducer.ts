import { Track } from "../../api/interfaces/ITopTracks";
import { FeedActionTypes } from "./feed.types";
import { FeedTypes } from "./feed.types";

interface Iinit {
  tracks: null | Track[];
  isLoading: boolean;
}

const INITIAL_STATE: Iinit = {
  tracks: null,
  isLoading: false,
};

export const feedReducer = (prevState = INITIAL_STATE, action: FeedTypes) => {
  switch (action.type) {
    case FeedActionTypes.SET_FEED_DATA:
      return {
        ...prevState,
        tracks: action.payload,
      };
    case FeedActionTypes.SET_FEED_LOADING:
      return {
        ...prevState,
        isLoading: action.payload,
      };
    default: {
      return prevState;
    }
  }
};
