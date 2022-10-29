import { createAction } from '@reduxjs/toolkit';
import { APP__SET_NAV_OPEN, APP__SET_WIDTH } from '../constants';

export const setAppWidthAction = createAction<number>(APP__SET_WIDTH);
export const setAppIsNavOpenAction = createAction<boolean>(APP__SET_NAV_OPEN);
