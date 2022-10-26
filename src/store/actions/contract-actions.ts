import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';
import alertService from '../../services/alert-service';
import IContractData from '../../types/IContractData';
import { mapBigNumberToString, mapBooleanToBoolean, mapFromBigNumberToNumber, mapFromPricesToPrices, mapFromSuppliesToSupplies } from '../../utils/map-contract-data';
import { CONTRACT_SET_LOADING, CONTRACT__FETCH, CONTRACT__SET_DATA, CONTRACT__SET_REFERRAL_CODE } from '../constants';
import { blockchainAccountSelector, blockchainContractSelector } from '../selectors/blockchain-selectors';
import { setBlockchainIsConnectedAction } from './blockchain-actions';

export const setContractLoadingAction = createAction<boolean>(CONTRACT_SET_LOADING);
export const setContractDataAction = createAction<IContractData>(CONTRACT__SET_DATA);
export const setContractRefferalCodeAction = createAction<string>(CONTRACT__SET_REFERRAL_CODE);

export const fetchContractInfoActionAsync = createAsyncThunk<void, never, { state: RootState }>(CONTRACT__FETCH, async (__, thunkApi) => {
  const state = thunkApi.getState();
  const contract = blockchainContractSelector(state);
  const account = blockchainAccountSelector(state);
  thunkApi.dispatch(setContractLoadingAction(true));
  try {
    const contractData: IContractData = {
      balance: mapFromBigNumberToNumber(await contract.balanceOf(account)),
      prices: mapFromPricesToPrices(await contract.prices()),
      salePhase: await contract.salePhase(),
      supplies: mapFromSuppliesToSupplies(await contract.supply()),
      walletOfOwner: await contract.walletOfOwner(account),
      mintedNftsByUser: mapFromBigNumberToNumber(await contract.walletClaimed(account)),
      reveal: mapBooleanToBoolean(await contract.revealed()),
      maxPerWallet: mapFromBigNumberToNumber(await contract.maxPublic()),
      currentPrice: mapBigNumberToString(await contract.currentPriceByPhase()),
      currentSupply: mapFromBigNumberToNumber(await contract.totalSupply()),
    };
    thunkApi.dispatch(setContractDataAction(contractData));
    thunkApi.dispatch(setBlockchainIsConnectedAction(true));
    alertService.successAlert({ title: 'Success', message: 'Contract was loaded successfully' });
  } catch (err) {
    console.log(err);
    alertService.errorAlert({ title: 'Contract error', message: 'Contract failed loading' });
  } finally {
    thunkApi.dispatch(setContractLoadingAction(false));
  }
});
