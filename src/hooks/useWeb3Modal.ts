/* eslint-disable consistent-return */
import { useEffect, useMemo } from 'react';
import Web3Modal from 'web3modal';
import { useAppDispatch, useAppSelector } from '../store';
import { blockchainDisconnectAsyncAction, setBlockchainWeb3ModalAction, updateBlockchainAccountActionAsync } from '../store/actions/blockchain-actions';
import { blockchainProviderSelector } from '../store/selectors/blockchain-selectors';
import { addMetamaskIfMissing, providerOptions } from '../utils/providerOptions';

const useWeb3Modal = (): void => {
  const dispatch = useAppDispatch();
  const provider = useAppSelector(blockchainProviderSelector);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customProvider = useMemo(() => provider as unknown as any, [provider]);
  useEffect(() => {
    addMetamaskIfMissing();
    localStorage.clear();
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      theme: 'dark',
    });
    dispatch(setBlockchainWeb3ModalAction(web3Modal));
  }, [dispatch]);
  useEffect(() => {
    if (customProvider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        dispatch(updateBlockchainAccountActionAsync(accounts));
      };

      const handleChainChanged = () => {
        dispatch(blockchainDisconnectAsyncAction());
      };

      const handleDisconnect = async () => {
        dispatch(blockchainDisconnectAsyncAction());
      };

      customProvider.on('accountsChanged', handleAccountsChanged);
      customProvider.on('chainChanged', handleChainChanged);
      customProvider.on('disconnect', handleDisconnect);

      return () => {
        if (customProvider.removeListener) {
          customProvider.removeListener('accountsChanged', handleAccountsChanged);
          customProvider.removeListener('chainChanged', handleChainChanged);
          customProvider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider, dispatch, customProvider]);
};
export default useWeb3Modal;
