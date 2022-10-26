import { createReducer } from '@reduxjs/toolkit';
import { emptyAddress } from '../../constants/switch-network-data';
import IContractData from '../../types/IContractData';
import { setContractDataAction, setContractLoadingAction, setContractRefferalCodeAction } from '../actions/contract-actions';

interface State {
  loading: boolean;
  data: IContractData;
  referral: string;
}
const initialState: State = {
  loading: false,
  data: null,
  referral: emptyAddress,
};

const contractReducer = createReducer(initialState, builder =>
  builder
    .addCase(setContractDataAction, (state, action) => ({ ...state, data: action.payload }))
    .addCase(setContractLoadingAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setContractRefferalCodeAction, (state, action) => ({ ...state, referral: action.payload })),
);
export default contractReducer;
