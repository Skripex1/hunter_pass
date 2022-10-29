import { createReducer } from '@reduxjs/toolkit';
import IContractData from '../../types/IContractData';
import { setContractDataAction, setContractLoadingAction } from '../actions/contract-actions';

interface State {
  loading: boolean;
  data: IContractData;
}
const initialState: State = {
  loading: false,
  data: null,
};

const contractReducer = createReducer(initialState, builder =>
  builder
    .addCase(setContractDataAction, (state, action) => ({ ...state, data: action.payload }))
    .addCase(setContractLoadingAction, (state, action) => ({ ...state, loading: action.payload })),
);
export default contractReducer;
