import { combineReducers } from "redux";

import homepageReducer from './home';

const rootReducer = combineReducers({
  home: homepageReducer,
})

export default rootReducer;

