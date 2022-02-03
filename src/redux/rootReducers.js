import { combineReducers } from "redux";
import templateReducer from "./templates/reducer";

const rootReducer = combineReducers({
  templates: templateReducer,
});

export default rootReducer;
