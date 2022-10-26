/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useAppDispatch, useAppSelector } from '../../../../../../store';
import { setAppSliderNextAction, setAppSliderPrevAction, setAppSliderSlidingAction } from '../../../../../../store/actions/app-actions';
import { appSliderSelector } from '../../../../../../store/selectors/app-selectors';
import { Wrapper, CarouselContainer, CarouselSlot } from './styles';

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const Carousel: FunctionComponent<{ children: ReactNode }> = props => {
  const { children } = props;
  const numItems = React.Children.count(children);
  const dispatch = useAppDispatch();
  const sliderInfo = useAppSelector(appSliderSelector);
  const slideRight = () => {
    if (sliderInfo.pos === 2) {
      return;
    }
    dispatch(setAppSliderNextAction());
    setTimeout(() => {
      dispatch(setAppSliderSlidingAction(false));
    }, 50);
  };
  const slideLeft = () => {
    if (sliderInfo.pos === 0) {
      return;
    }
    dispatch(setAppSliderPrevAction());
    setTimeout(() => {
      dispatch(setAppSliderSlidingAction(false));
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={sliderInfo.dir ? 'NEXT' : 'PREV'} sliding={sliderInfo.sliding}>
          {React.Children.map(children, (child, index) => (
            <CarouselSlot order={getOrder(index, sliderInfo.pos, numItems)}>{child}</CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
    </div>
  );
};

export default Carousel;
