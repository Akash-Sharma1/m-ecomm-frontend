import { combineReducers } from 'redux';

import homepageReducer from './home';
import productsReducer from './products';
import navigationReducer from './navigation';

const rootReducer = combineReducers({
  home: homepageReducer,
  products: productsReducer,
  navigation: navigationReducer,
});

export default rootReducer;

