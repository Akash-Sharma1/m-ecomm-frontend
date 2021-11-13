import { combineReducers } from 'redux';

import homepageReducer from './home';
import productsReducer from './products';
import cartReducer from './cart';
import chatsReducer from './chats';
import conversationsReducer from './conversations';
import userReducer from './user';
import generalReducer from './general';

const rootReducer = combineReducers({
  home: homepageReducer,
  products: productsReducer,
  cart: cartReducer,
  chats: chatsReducer,
  conversations: conversationsReducer,
  user: userReducer,
  general: generalReducer,
});

export default rootReducer;

