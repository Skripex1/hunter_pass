import { createAction } from '@reduxjs/toolkit';
import { APP__SET_IS_SCROLL, APP__SET_SLIDER_DIR, APP__SET_NAV_OPEN, APP__SET_SLIDER_NEXT, APP__SET_SLIDER_PREV, APP__SET_SLIDER_SLIDING, APP__SET_WIDTH } from '../constants';

export const setAppIsScrolledAction = createAction<boolean>(APP__SET_IS_SCROLL);
export const setAppWidthAction = createAction<number>(APP__SET_WIDTH);
export const setAppSliderNextAction = createAction(APP__SET_SLIDER_NEXT);
export const setAppSliderPrevAction = createAction(APP__SET_SLIDER_PREV);
export const setAppSliderSlidingAction = createAction<boolean>(APP__SET_SLIDER_SLIDING);
export const setAppSliderDirAction = createAction<boolean>(APP__SET_SLIDER_DIR);
export const setAppIsNavOpenAction = createAction<boolean>(APP__SET_NAV_OPEN);
