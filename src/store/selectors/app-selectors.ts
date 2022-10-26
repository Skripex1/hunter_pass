import { RootState } from '..';
import ISliderData from '../../types/ISliderData';

export const appIsScrolledSelector = (state: RootState): boolean => state.app.isScrolled;
export const appWidthSelector = (state: RootState): number => state.app.width;
export const appSliderSelector = (state: RootState): ISliderData => state.app.sliderInfo;
export const appIsNavOpen = (state: RootState): boolean => state.app.isNavOpen;
