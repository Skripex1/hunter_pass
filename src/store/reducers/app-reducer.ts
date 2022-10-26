import { createReducer } from '@reduxjs/toolkit';
import ISliderData from '../../types/ISliderData';
import {
  setAppIsNavOpenAction,
  setAppIsScrolledAction,
  setAppSliderDirAction,
  setAppSliderNextAction,
  setAppSliderPrevAction,
  setAppSliderSlidingAction,
  setAppWidthAction,
} from '../actions/app-actions';

interface State {
  isScrolled: boolean;
  width: number;
  sliderInfo: ISliderData;
  isNavOpen: boolean;
}
const initialState: State = {
  isScrolled: false,
  width: window.innerWidth,
  isNavOpen: false,
  sliderInfo: {
    pos: 0,
    sliding: false,
    dir: true,
  },
};

const appReducer = createReducer(initialState, builder =>
  builder
    .addCase(setAppIsNavOpenAction, (state, action) => ({ ...state, isNavOpen: action.payload }))
    .addCase(setAppSliderNextAction, state => ({ ...state, sliderInfo: { pos: state.sliderInfo.pos + 1, dir: true, sliding: true } }))
    .addCase(setAppSliderPrevAction, state => ({ ...state, sliderInfo: { pos: state.sliderInfo.pos - 1, dir: false, sliding: true } }))
    .addCase(setAppSliderDirAction, (state, action) => ({ ...state, sliderInfo: { pos: state.sliderInfo.pos - 1, dir: action.payload, sliding: state.sliderInfo.sliding } }))
    .addCase(setAppSliderSlidingAction, (state, action) => ({ ...state, sliderInfo: { pos: state.sliderInfo.pos, dir: state.sliderInfo.dir, sliding: action.payload } }))
    .addCase(setAppIsScrolledAction, (state, action) => ({ ...state, isScrolled: action.payload }))
    .addCase(setAppWidthAction, (state, action) => ({ ...state, width: action.payload })),
);
export default appReducer;
