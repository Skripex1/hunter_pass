import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import {
  BLOCKCHAIN__SET_ACCOUNT,
  BLOCKCHAIN__SET_LOADING,
  BLOCKCHAIN__SET_PROVIDER,
  BLOCKCHAIN__FETCH,
  BLOCKCHAIN__SET_WEB3MODAL,
  BLOCKCHAIN__MINT,
  BLOCKCHAIN__SET_IS_CONNECTED,
  BLOCKCHAIN__SET_CONTRACT,
  BLOCKCHAIN__DISCONNECT,
  BLOCKCHAIN__UPDATE_ACCOUNT_ASYNC,
} from '../constants';
import { RootState } from '..';
import { blockchainAccountSelector, blockchainContractSelector, blockchainWeb3ModalSelector } from '../selectors/blockchain-selectors';
import { switchNetworkByWallet } from './blockchain-utils';
import Config from '../../config';
import { fetchContractInfoActionAsync } from './contract-actions';
import initMerkleTree from '../../utils/merkle';
import alertService from '../../services/alert-service';
import { contractDataSelector } from '../selectors/contract-selectors';
import IMintRequest from '../../types/IMintRequest';

export const setBlockchainLoadingAction = createAction<boolean>(BLOCKCHAIN__SET_LOADING);
export const setBlockchainAccountAction = createAction<string>(BLOCKCHAIN__SET_ACCOUNT);
export const setBlockchainContractAction = createAction<ethers.Contract>(BLOCKCHAIN__SET_CONTRACT);
export const setBlockchainWeb3ModalAction = createAction<Web3Modal>(BLOCKCHAIN__SET_WEB3MODAL);
export const setBlockchainProviderAction = createAction<ethers.providers.ExternalProvider>(BLOCKCHAIN__SET_PROVIDER);
export const setBlockchainIsConnectedAction = createAction<boolean>(BLOCKCHAIN__SET_IS_CONNECTED);

export const fecthBlockchainDataActionAsync = createAsyncThunk<void, never, { state: RootState }>(BLOCKCHAIN__FETCH, async (__: never, thunkApi) => {
  const web3Modal = blockchainWeb3ModalSelector(thunkApi.getState());
  try {
    const mainProvider = await web3Modal.connect();
    thunkApi.dispatch(setBlockchainLoadingAction(true));
    const library = new ethers.providers.Web3Provider(mainProvider);
    const isChainRight = await switchNetworkByWallet({ library });
    if (!isChainRight) {
      return;
    }
    const accounts = await library.listAccounts();
    const account = library.getSigner(accounts[0]);
    const contract = new ethers.Contract(Config.contractAddress, Config.contractAbi, account);
    thunkApi.dispatch(setBlockchainProviderAction(library.provider));
    // eslint-disable-next-line no-underscore-dangle
    thunkApi.dispatch(setBlockchainAccountAction(account._address));
    thunkApi.dispatch(setBlockchainContractAction(contract));
    thunkApi.dispatch(fetchContractInfoActionAsync());
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});
export const blockchainDisconnectAsyncAction = createAsyncThunk<void, never, { state: RootState }>(BLOCKCHAIN__DISCONNECT, async (__: never, thunkApi) => {
  const web3Modal = blockchainWeb3ModalSelector(thunkApi.getState());

  thunkApi.dispatch(setBlockchainLoadingAction(true));
  try {
    await web3Modal.clearCachedProvider();
    thunkApi.dispatch(setBlockchainAccountAction(''));
    thunkApi.dispatch(setBlockchainIsConnectedAction(false));
    thunkApi.dispatch(setBlockchainProviderAction({} as ethers.providers.ExternalProvider));
  } catch {
    // swallow exception
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});
export const updateBlockchainAccountActionAsync = createAsyncThunk<void, string[], { state: RootState }>(BLOCKCHAIN__UPDATE_ACCOUNT_ASYNC, async (accounts: string[], thunkApi) => {
  thunkApi.dispatch(setBlockchainLoadingAction(true));
  try {
    thunkApi.dispatch(setBlockchainAccountAction(accounts[0]));
    thunkApi.dispatch(fetchContractInfoActionAsync());
  } catch {
    // swallow exception
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});

export const blockchainMintNftAsyncAction = createAsyncThunk<void, IMintRequest, { state: RootState }>(BLOCKCHAIN__MINT, async (data, thunkApi) => {
  const contractData = contractDataSelector(thunkApi.getState() as RootState);
  const contract = blockchainContractSelector(thunkApi.getState() as RootState);
  const account = blockchainAccountSelector(thunkApi.getState() as RootState);
  thunkApi.dispatch(setBlockchainLoadingAction(true));
  try {
    if (contract) {
      let tx;
      const proofs = initMerkleTree(account);
      if (contractData.presaleStatus === true) {
        if (contractData.whitelistStatus === true) {
          tx = await contract.mint(data.amount, proofs, { value: (Number(contractData.presalePrice) * data.amount).toString() });
        }
        tx = await contract.mint(data.amount, proofs, { value: (Number(contractData.presalePrice) * data.amount).toString() });
      } else {
        tx = await contract.mint(data.amount, proofs, { value: (Number(contractData.price) * data.amount).toString() });
      }
      await tx.wait();
      thunkApi.dispatch(fetchContractInfoActionAsync());
      alertService.successAlert({ title: 'Success', message: 'Your minted succeeded!' });
    }
  } catch (e: any) {
    const errorMsg = e?.error?.message.substring(0, 40);
    if (errorMsg === 'UNPREDICTABLE_GAS_LIMIT') alertService.errorAlert({ title: 'Contract error', message: 'Something went wrong' });
    else {
      const fallback: string = e?.error?.data?.message;
      if (fallback.includes('execution reverted: ')) {
        const newMsg = fallback.replace('execution reverted: ', '');
        alertService.errorAlert({ title: 'Contract error', message: newMsg });
      } else {
        alertService.errorAlert({ title: 'Contract error', message: errorMsg || 'Contract failed' });
      }
    }
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});
