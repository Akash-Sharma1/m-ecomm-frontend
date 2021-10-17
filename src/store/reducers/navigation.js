// ACTIONS


// DISPATCHERS


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
  products: [
    {
      id: 1,
      title: 'Shri Ram',
      price: 240.00,
      rating: 5.0,
      discount: 0.3,
      isFavorite: true,
      // eslint-disable-next-line max-len
      image: 'https://i.pinimg.com/originals/32/d5/27/32d5271c16689d66aaf1843170f20d20.jpg',
    },
  ],
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

