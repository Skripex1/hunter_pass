/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import {
  setBlockchainAccountAction,
  setBlockchainIsConnectedAction,
  setBlockchainProviderAction,
  setBlockchainContractAction,
  setBlockchainLoadingAction,
  setBlockchainWeb3ModalAction,
} from '../actions/blockchain-actions';

interface State {
  loading: boolean;
  account: string;
  provider: ethers.providers.ExternalProvider;
  isConnected: boolean;
  contract: any;
  web3Modal: Web3Modal;
}
const initialState: State = {
  loading: false,
  account: '',
  provider: null,
  isConnected: false,
  contract: null,
  web3Modal: null,
};

const blockchainReducer = createReducer(initialState, builder =>
  builder
    .addCase(setBlockchainWeb3ModalAction, (state, action) => ({ ...state, web3Modal: action.payload }))
    .addCase(setBlockchainProviderAction, (state, action) => ({ ...state, provider: action.payload }))
    .addCase(setBlockchainLoadingAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setBlockchainContractAction, (state, action) => ({ ...state, contract: action.payload }))
    .addCase(setBlockchainIsConnectedAction, (state, action) => ({ ...state, isConnected: action.payload }))
    .addCase(setBlockchainAccountAction, (state, action) => ({ ...state, account: action.payload })),
);
export default blockchainReducer;
