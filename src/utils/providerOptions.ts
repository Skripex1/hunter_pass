import WalletConnect from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { providers } from 'web3modal';
import Config from '../config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const providerOptions: any = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: 'TopBull',
      infuraId: Config.infuraKey,
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: Config.infuraKey,
    },
    rpc: {
      1: 'https://main‑light.eth.linkpool.io',
    },
    chainId: 1,
  },
};
export const addMetamaskIfMissing = (): void => {
  if (!window.ethereum) {
    providerOptions['custom-metamask'] = {
      display: {
        logo: providers.METAMASK.logo,
        name: 'MetaMask',
        description: 'Connect using browser wallet',
      },
      package: {},
      connector: async () => {
        window.open(Config.metamaskLink);
      },
    };
  }
};
