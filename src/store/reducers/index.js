import { combineReducers } from 'redux';

import homepageReducer from './home';
import productsReducer from './products';
import cartReducer from './cart';
import chatReducer from './chat';
import userReducer from './user';

const rootReducer = combineReducers({
  home: homepageReducer,
  products: productsReducer,
  cart: cartReducer,
  chat: chatReducer,
  user: userReducer,
});

export default rootReducer;

