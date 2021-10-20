import React from 'react';

import List from './List';

/**
 * @param {variant} string [default, compact]
 */
const Ratings = ({
  rating = 0, showSubText, style, variant='default',
}) => {
  let completeStars = 0;
  let emptyStars = 0;
  let halfStar = 0;

  if (variant === 'default') {
    completeStars = Math.floor(rating);
    emptyStars = Math.floor(5 - rating);
    halfStar = 5 - completeStars - emptyStars;
  } else if (variant === 'compact') {
    completeStars = Math.floor(rating) && 1;
    halfStar = ((rating - Math.floor(rating)) && 1 - completeStars);
    emptyStars = 1 - (completeStars || halfStar);
  }

  const starDetailsArray = [
    ...(completeStars ? [...Array(completeStars)].map(() => 'complete'): []),
    ...(halfStar ? [...Array(halfStar)].map(() => 'half') : []),
    ...(emptyStars ? [...Array(emptyStars)].map(() => 'empty') : []),
    showSubText && rating,
  ];

  return (
    <List starDetailsArray={starDetailsArray} style={style} />
  );
};

export default Ratings;
