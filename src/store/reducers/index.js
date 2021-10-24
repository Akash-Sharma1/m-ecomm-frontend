import { combineReducers } from 'redux';

import homepageReducer from './home';
import productsReducer from './products';
import cartReducer from './cart';

const rootReducer = combineReducers({
  home: homepageReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;

