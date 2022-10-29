import { RootState } from '..';

export const appWidthSelector = (state: RootState): number => state.app.width;
export const appIsNavOpen = (state: RootState): boolean => state.app.isNavOpen;
