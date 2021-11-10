// ACTIONS
const prefix = 'general';

const SET_ACCENT_COLOR_INDEX = `${prefix}/SET_ACCENT_COLOR_INDEX`;

// DISPATCHERS
export const setAccentColorIndex = (colorIndex) => {
  return (dispatch) => {
    dispatch({ type: SET_ACCENT_COLOR_INDEX, payload: colorIndex });
  };
};


// INITIAL STATE
const initialState = {
  accentColorIndex: 0,
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  case SET_ACCENT_COLOR_INDEX:
    return {
      ...state,
      accentColorIndex: action.payload,
    };
  default:
    return state;
  }
};
