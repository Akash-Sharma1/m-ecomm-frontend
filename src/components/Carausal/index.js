import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from 'styles';
import List from '../List';
import Dots from './Dots';

const CONTAINER_SIZE = Sizes.SCREEN_WIDTH;
// const ITEM_SIZE = Sizes.SCREEN_WIDTH * 0.8;
const SEPERATOR_WIDTH = Sizes.size(20);
const AUTO_SCROLL_INTERVAL_TIME = 6000;

const getEdgeMargins = (containerSize, itemSize, seperatorSize) => (
  seperatorSize + (containerSize - itemSize - 2 * seperatorSize) / 2
);

const Carausal = ({
  data,
  style,
  // Sizes
  containerSize = CONTAINER_SIZE,
  seperatorSize = SEPERATOR_WIDTH,

  // Auto scroll
  autoScroll,
  adjacentItemsVisible=false,
  autoPlayIntervalTime = AUTO_SCROLL_INTERVAL_TIME,

  children,

  // Dots
  dots=false,
  dotsPosition='top',
  dotsStyle,
  dotsActiveStyle,
  dotsContainerStyle,
  ...remainingProps
}) => {
  const timerRef = useRef(null);
  const curentSlideRef = useRef(0);
  const listRef = useRef(null);
  const isManuallyMovedRef = useRef(false);

  const itemSize = containerSize - 2 * seperatorSize -
    (adjacentItemsVisible ? (containerSize - 2 * seperatorSize) * 0.2 : 0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItemSize = itemSize + seperatorSize;

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
    <View style={[styles.container, style]}>
      <List
        ref={listRef}
        style={styles.container}
        horizontal

        data={data}
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
            index: index,
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

        showsHorizontalScrollIndicator={false}

        {...remainingProps}
      />

      {dots && (
        <Dots
          position={dotsPosition}
          totalDots={data.length}
          currentIndex={currentIndex}
          style={dotsStyle}
          activeStyle={dotsActiveStyle}
          containerStyle={dotsContainerStyle}
        />
      )}
    </View>
  );
};

export default Carausal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
