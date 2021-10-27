// ACTIONS
const prefix = 'products';

const TOGGLE_BOOKMARK_INIT = `${prefix}/TOGGLE_BOOKMARK_INIT`;
const TOGGLE_BOOKMARK_DONE = `${prefix}/TOGGLE_BOOKMARK_DONE`;
const TOGGLE_BOOKMARK_ERROR = `${prefix}/TOGGLE_BOOKMARK_ERROR`;

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

export const setCurrentProductId = (productId) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_PRODUCT_ID, payload: productId });
  };
};

// INITIAL STATE
/**
  products: [{
    id: <int>,
    title: <string> (Shri Ram),
    price: <float>,
    rating: <float> [0, 5],
    discount: <float> [0, 1],
    isFavorite: <boolean>,
    image: '<uri>',
  }]
 */
const initialState = {
  isLoading: false,
  loadError: null,
  currentProductId: null,
  products: {
    0: {
      id: 0,
      title: 'Shri Ram',
      price: 240.00,
      rating: 5.0,
      discount: 0,
      isBookmarked: false,
      timesReviewed: 123,
      // eslint-disable-next-line max-len
      description: 'Duis ornare justo eros, at laoreet enim commodo ac. Integer ornare mollis lectus, mollis porta libero cursus quis. Sed nisi sem, efficitur nec eros quis, laoreet condimentum libero. In finibus ullamcorper sapien, at facilisis risus imperdiet vitae. Nulla facilisi. Nunc et dapibus erat. In hac habitasse platea dictumst.',
      // eslint-disable-next-line max-len
      image: 'https://i.pinimg.com/originals/32/d5/27/32d5271c16689d66aaf1843170f20d20.jpg',
    },
    1: {
      id: 1,
      title: 'Shri Ram',
      price: 240.00,
      rating: 1.5,
      discount: 0,
      timesReviewed: 12,
      isBookmarked: true,
      // eslint-disable-next-line max-len
      description: 'Duis ornare justo eros, at laoreet enim commodo ac. Integer ornare mollis lectus, mollis porta libero cursus quis. Sed nisi sem, efficitur nec eros quis, laoreet condimentum libero. In finibus ullamcorper sapien, at facilisis risus imperdiet vitae. Nulla facilisi. Nunc et dapibus erat. In hac habitasse platea dictumst.',
      // eslint-disable-next-line max-len
      image: 'https://i.pinimg.com/originals/32/d5/27/32d5271c16689d66aaf1843170f20d20.jpg',
    },
    2: {
      id: 2,
      title: 'Shri Ram',
      price: 240.00,
      timesReviewed: 13,
      rating: 5.0,
      discount: 0.3,
      isBookmarked: false,
      // eslint-disable-next-line max-len
      description: 'Duis ornare justo eros, at laoreet enim commodo ac. Integer ornare mollis lectus, mollis porta libero cursus quis. Sed nisi sem, efficitur nec eros quis, laoreet condimentum libero. In finibus ullamcorper sapien, at facilisis risus imperdiet vitae. Nulla facilisi. Nunc et dapibus erat. In hac habitasse platea dictumst.',
      // eslint-disable-next-line max-len
      image: 'https://i.pinimg.com/originals/32/d5/27/32d5271c16689d66aaf1843170f20d20.jpg',
    },
    3: {
      id: 3,
      title: 'Shri Ram',
      price: 240.00,
      rating: 1.5,
      discount: 0.12,
      isBookmarked: true,
      timesReviewed: 3,
      // eslint-disable-next-line max-len
      description: 'Duis ornare justo eros, at laoreet enim commodo ac. Integer ornare mollis lectus, mollis porta libero cursus quis. Sed nisi sem, efficitur nec eros quis, laoreet condimentum libero. In finibus ullamcorper sapien, at facilisis risus imperdiet vitae. Nulla facilisi. Nunc et dapibus erat. In hac habitasse platea dictumst.',
      // eslint-disable-next-line max-len
      image: 'https://i.pinimg.com/originals/32/d5/27/32d5271c16689d66aaf1843170f20d20.jpg',
    },
  },
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
  default:
    return state;
  }
};
