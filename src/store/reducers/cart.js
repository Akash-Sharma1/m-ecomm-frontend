// ACTIONS
const prefix = 'products';

const CHANGE_ITEM_QUANTITY = `${prefix}/CHANGE_ITEM_QUANTITY`;

// DISPATCHERS
export const changeItemQuantity = ({ productId, change = +1 }) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_ITEM_QUANTITY, payload: {
      productId, change,
    } });
  };
};


// INITIAL STATE
/** cart: [
 *  {
 *    productId: <int>
 *    quantity: <int>
 *  }
 * ]
 */
const initialState = {
  isLoading: false,
  loadError: null,
  cart: {},
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_ITEM_QUANTITY:
    return {
      ...state,
      cart: state.cart.map(),
    };
  default:
    return state;
  }
};
