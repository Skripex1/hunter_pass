import Web3Modal from 'web3modal';

export const disconnect = async (web3Modal: Web3Modal): Promise<void> => {
  await web3Modal.clearCachedProvider();
};
