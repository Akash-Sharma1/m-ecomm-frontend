const fetchMessages = async () => {
  return [...Array(5)].map((_, index) => (
    {
      id: index,
      title: 'Shri Ram',
      price: 240.00,
      rating: 5.0,
      discount: 0,
      isBookmarked: false,
      timesReviewed: 123,
      // eslint-disable-next-line max-len
      description: 'Duis ornare justo eros, at laoreet enim commodo ac. Integer ornare mollis lectus, mollis porta libero cursus quis. Sed nisi sem, efficitur nec eros quis, laoreet condimentum libero. In finibus ullamcorper sapien, at facilisis risus imperdiet vitae. Nulla facilisi. Nunc et dapibus erat. In hac habitasse platea dictumst.',
      // eslint-disable-next-line max-len
      image: 'file:///Users/akash/Downloads/balaji-transparent.png',
    }
  ));
};


export default {
  fetchAll: fetchMessages,
};
