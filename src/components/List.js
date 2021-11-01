import React, { useCallback, useEffect, useRef } from 'react';
import { FlatList } from 'react-native';

const IntervalTime = 5000;

const List = ({
  data = [],
  renderitem = () => {
    return null;
  },
  key,
  autoPlay,
  autoPlayIntervalTime = IntervalTime,
  snapOnItems,
  ...remainingProps
}) => {
  const timerRef = useRef(null);
  const curentSlideRef = useRef(0);
  const listRef = useRef(null);

  const randomString = (Math.random() + 1).toString(36).substring(2);

  const startAutoPlay = useCallback(() => {
    timerRef .current = setInterval(() => {
      nextStep();
    }, autoPlayIntervalTime);
  }, [nextStep, autoPlayIntervalTime]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef) {
      clearInterval(timerRef);
      timerRef.current = null;
    }
  }, []);

  const nextStep = useCallback(() => {
    curentSlideRef.current = (curentSlideRef.current + 1) % data.length;

    listRef && listRef.current && listRef.current.scrollToIndex({
      index: (curentSlideRef.current + 1) % data.length,
      animated: true,
    });
  }, [data]);

  useEffect(() => {
    stopAutoPlay();
    if (autoPlay) {
      startAutoPlay();
    }

    return () => stopAutoPlay();
  }, [autoPlay, startAutoPlay, stopAutoPlay]);

  const paginationProps = snapOnItems ? {
    snapToAlignment: 'start',
    pagingEnabled: true,
  } : {};

  return (
    <FlatList
      ref={listRef}
      data={data}
      renderItem={renderitem}
      keyExtractor={(_, index) => index.toString()}
      listKey={`${key}-${randomString}`}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...paginationProps}
      {...remainingProps}
    />
  );
};

export default List;
