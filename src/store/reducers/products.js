import productsApi from 'apis/product';
import { transformProductsResponse } from 'utils/products';

// ACTIONS
const prefix = 'products';

const TOGGLE_BOOKMARK_INIT = `${prefix}/TOGGLE_BOOKMARK_INIT`;
const TOGGLE_BOOKMARK_DONE = `${prefix}/TOGGLE_BOOKMARK_DONE`;
const TOGGLE_BOOKMARK_ERROR = `${prefix}/TOGGLE_BOOKMARK_ERROR`;

const FETCH_PRODUCTS_INIT = `${prefix}/FETCH_PRODUCTS_INIT`;
const FETCH_PRODUCTS_DONE = `${prefix}/FETCH_PRODUCTS_DONE`;
const FETCH_PRODUCTS_ERROR = `${prefix}/FETCH_PRODUCTS_ERROR`;

const SET_CURRENT_PRODUCT_ID = `${prefix}/SET_CURRENT_PRODUCT_ID`;

// DISPATCHERS
export const toggleBookmark = ({ productId, setBookmark }) => {
  return (dispatch) => {
    try {
      dispatch({ type: TOGGLE_BOOKMARK_INIT });
      // API CALL EXPECTED
      dispatch({
        type: TOGGLE_BOOKMARK_DONE,
        payload: { productId, isBookmarked: setBookmark },
      });
    } catch (error) {
      dispatch({ type: TOGGLE_BOOKMARK_ERROR, error });
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCTS_INIT });

      const response = await productsApi.fetchAll();
      const transformedProductsResponse = transformProductsResponse(response);

      dispatch({
        type: FETCH_PRODUCTS_DONE,
        payload: transformedProductsResponse,
      });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_ERROR, error });
    }
  };
};

export const setCurrentProductId = (productId) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_PRODUCT_ID, payload: productId });
  };
};

// INITIAL STATE
/**
  products: {
    <product_id>: {
    id: <int>,
    title: <string> (Shri Ram),
    price: <float>,
    rating: <float> [0, 5],
    discount: <float> [0, 1],
    isFavorite: <boolean>,
    image: '<uri>',
    }
  }
 */
const initialState = {
  isLoading: false,
  loadError: null,
  currentProductId: null,
  products: {},
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_BOOKMARK_INIT:
    return {
      ...state,
      isLoading: true,
      loadError: null,
    };
  case TOGGLE_BOOKMARK_DONE:
    return {
      ...state,
      isLoading: false,
      loadError: null,
      products: {
        ...state.products,
        [action.payload.productId]: {
          ...state.products[action.payload.productId],
          isBookmarked: action.payload.isBookmarked,
        },
      },
    };
  case TOGGLE_BOOKMARK_ERROR:
    return {
      ...state,
      isLoading: false,
      loadError: action.error,
    };
  case SET_CURRENT_PRODUCT_ID:
    return {
      ...state,
      currentProductId: action.payload,
    };
  case FETCH_PRODUCTS_INIT:
    return {
      ...state,
      isLoading: true,
      loadError: null,
    };
  case FETCH_PRODUCTS_DONE:
    return {
      ...state,
      isLoading: false,
      loadError: null,
      products: action.payload,
    };
  case FETCH_PRODUCTS_ERROR:
    return {
      ...state,
      isLoading: false,
      loadError: action.error,
    };
  default:
    return state;
  }
};
