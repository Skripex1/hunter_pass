/* eslint-disable @typescript-eslint/no-explicit-any */
import { toHex } from '../utils/convertBlockchainData';

const SWITCH_REQUEST = 'wallet_switchEthereumChain';
interface ISwitchNetworkData {
  method: string;
  params: any[];
}
export const WALLET_CONNECT__BRIDGE_LINK = 'https://bridge.walletconnect.org';
export const switchToEthereum: ISwitchNetworkData = {
  method: SWITCH_REQUEST,
  params: [{ chainId: toHex(1) }],
};
export const switchToCustom = (network: number): ISwitchNetworkData => {
  const switchData: ISwitchNetworkData = {
    method: SWITCH_REQUEST,
    params: [{ chainId: toHex(network) }],
  };
  return switchData;
};
export const getRequestSwitchForm = (network: number): ISwitchNetworkData => {
  if (network === 1) return switchToEthereum;
  return switchToCustom(network);
};
