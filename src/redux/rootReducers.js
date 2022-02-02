import { combineReducers } from "redux";
import templateReducer from "./templates/reducers";

const rootReducer = combineReducers({
  templates: templateReducer,
});

export default rootReducer;
