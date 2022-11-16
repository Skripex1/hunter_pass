/* eslint-disable no-unsafe-optional-chaining */
import { RootState } from '..';
import IContractData from '../../types/IContractData';

export const contractLoadingSelector = (state: RootState): boolean => state.contract.loading;
export const contractDataSelector = (state: RootState): IContractData => state.contract.data;
