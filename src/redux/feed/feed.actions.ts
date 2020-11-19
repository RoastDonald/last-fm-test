import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import api from "../../api";
import { Track } from "../../api/interfaces/ITopTracks";
import { FeedActionTypes } from "./feed.types";

export interface SetFeedLoadingAction {
  type: FeedActionTypes.SET_FEED_LOADING;
  payload: boolean;
}

export interface SetFeedDataAction {
  type: FeedActionTypes.SET_FEED_DATA;
  payload: Track[];
}

export const setFeedData = (data: Track[]): SetFeedDataAction => ({
  type: FeedActionTypes.SET_FEED_DATA,
  payload: data,
});

export const setLoading = (isLoading: boolean): SetFeedLoadingAction => ({
  type: FeedActionTypes.SET_FEED_LOADING,
  payload: isLoading,
});

export const getTopTracks = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const data = await api.getTopTracks();
      if (data) {
        dispatch(setFeedData(data));
      } else {
        dispatch(setFeedData([{}, {}] as Track[]));
      }
    } catch (error) {
      console.log(error);
      dispatch(setFeedData([] as Track[]));
    }
  };
};
