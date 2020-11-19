import { combineReducers } from "redux";
import { feedReducer } from "./feed/feed.reducer";
const rootReducer = combineReducers({
  feed: feedReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
