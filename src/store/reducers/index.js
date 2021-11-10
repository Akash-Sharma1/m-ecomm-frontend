import { combineReducers } from 'redux';

import homepageReducer from './home';
import productsReducer from './products';
import cartReducer from './cart';
import chatReducer from './chats';
import userReducer from './user';
import generalReducer from './general';

const rootReducer = combineReducers({
  home: homepageReducer,
  products: productsReducer,
  cart: cartReducer,
  chats: chatReducer,
  user: userReducer,
  general: generalReducer,
});

export default rootReducer;

