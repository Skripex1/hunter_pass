import { createReducer } from '@reduxjs/toolkit';
import { setAppIsNavOpenAction, setAppWidthAction } from '../actions/app-actions';

interface State {
  width: number;
  isNavOpen: boolean;
}
const initialState: State = {
  width: window.innerWidth,
  isNavOpen: false,
};

const appReducer = createReducer(initialState, builder =>
  builder
    .addCase(setAppIsNavOpenAction, (state, action) => ({ ...state, isNavOpen: action.payload }))
    .addCase(setAppWidthAction, (state, action) => ({ ...state, width: action.payload })),
);
export default appReducer;
