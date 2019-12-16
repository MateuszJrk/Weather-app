import { combineReducers } from "redux";
import { weatherinfo } from "./weatherReducer";
import { location } from "./weatherReducer";
import { conditions } from "./weatherReducer";
import { forecast } from "./weatherReducer";

const reducers = combineReducers({
  weatherinfo,
  location,
  conditions,
  forecast
});
export default reducers;
