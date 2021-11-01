import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Sizes } from 'styles';

const CONTAINER_SIZE = Sizes.SCREEN_WIDTH;
const ITEM_SIZE = Sizes.SCREEN_WIDTH * 0.8;
const SEPERATOR_WIDTH = 20;
const AUTO_SCROLL_INTERVAL_TIME = 6000;

const getEdgeMargins = (containerSize, itemSize, seperatorSize) => (
  seperatorSize + (containerSize - itemSize - 2 * seperatorSize) / 2
);

const Carausal = ({
  data,
  style,
  autoScroll,
  containerSize = CONTAINER_SIZE,
  itemSize = ITEM_SIZE,
  seperatorSize = SEPERATOR_WIDTH,
  autoPlayIntervalTime = AUTO_SCROLL_INTERVAL_TIME,
  children,
  loop,
  ...remainingProps
}) => {
  const timerRef = useRef(null);
  const curentSlideRef = useRef(0);
  const listRef = useRef(null);
  const isManuallyMovedRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [circularList, setCircularList] = useState(data);
  const totalItemSize = itemSize + seperatorSize;

  const randomString = (Math.random() + 1).toString(36).substring(2);

  // AUTO SCROLL CARAUSAL STARTS

  const startAutoPlay = useCallback(() => {
    timerRef .current = setInterval(() => {
      nextStep();
    }, autoPlayIntervalTime);
  }, [nextStep, autoPlayIntervalTime]);

  const stopAutoPlay = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => {
    stopAutoPlay();
    if (autoScroll) {
      startAutoPlay();
    }

    return () => stopAutoPlay();
  }, [autoScroll, startAutoPlay, stopAutoPlay]);

  const nextStep = useCallback(() => {
    // This is because when user moved the slide mannualy then
    // it should not skip to next slide in the next time out
    // it should skip the next time out in case of mannual move
    if (isManuallyMovedRef.current) {
      isManuallyMovedRef.current = false;
      return;
    }

    // overriden index is given as to move the slide anywhere
    curentSlideRef.current = (curentSlideRef.current + data.length + 1) % data.length;
    setCurrentIndex(curentSlideRef.current);

    listRef && listRef.current && listRef.current.scrollToIndex({
      index: curentSlideRef.current % data.length,
      animated: true,
    });
  }, [data]);

  // AUTO SCROLL CARAUSAL ENDS


  // TRIGGERED WHEN ANY CARAUSAL GOES TO NEXT INTERVAL
  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;

      if (curentSlideRef.current !== index) {
        isManuallyMovedRef.current = false;
        // Change current step to current index so that carausal starts from here
        curentSlideRef.current = index;
        setCurrentIndex(curentSlideRef.current);
        // This means manually moved the slides
        isManuallyMovedRef.current = true;
      }
    }
  }, []);


  return (
    <FlatList
      ref={listRef}
      style={[styles.container, style]}
      horizontal

      data={loop ? circularList : data}
      renderItem={({ item, index }) => React.cloneElement(children,
        {
          style: [
            childComponentStyles.commonChildComponent(itemSize),
            // eslint-disable-next-line max-len
            index === 0 && childComponentStyles.firstChildComponent(containerSize, itemSize, seperatorSize),
            // eslint-disable-next-line max-len
            index === data.length - 1 && childComponentStyles.lastChildComponent(containerSize, itemSize, seperatorSize),
          ],
          item,
          index: currentIndex % data.length,
          active: index === currentIndex,
        },
      )}

      // TRIGGERS
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 50,
      }}
      onViewableItemsChanged={onViewableItemsChanged}

      // PAGING
      pagingEnabled
      snapToInterval={totalItemSize}
      ItemSeparatorComponent={() => (
        <View style={{ width: seperatorSize }}/>
      )}

      // OPTIMIZATIONS
      getItemLayout={(data, index) => ({
        length: totalItemSize,
        offset: totalItemSize * index,
        index,
      })}
      windowSize={1}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
      decelerationRate="fast"

      keyExtractor={(_, index) => index.toString()}
      listKey={randomString}
      showsHorizontalScrollIndicator={false}

      {...remainingProps}
    />
  );
};

export default Carausal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const childComponentStyles = {
  commonChildComponent: (itemSize) => ({
    width: itemSize,
  }),
  firstChildComponent: (containerSize, itemSize, seperatorSize) => ({
    marginLeft: getEdgeMargins(containerSize, itemSize, seperatorSize),
  }),
  lastChildComponent: (containerSize, itemSize, seperatorSize) => ({
    marginRight: getEdgeMargins(containerSize, itemSize, seperatorSize),
  }),
};
