/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';
import alertService from '../../services/alert-service';
import { CONNECTION_ERROR__TITLE } from '../../services/alert-service/alert-errors';
import { getRequestSwitchForm, WALLET_CONNECT__BRIDGE_LINK } from '../../constants/switch-network-data';
import Config from '../../config';

interface ISwitchNetworkProps {
  library: ethers.providers.Web3Provider;
  network: number;
}
interface ISwitchNetworkWalletProps {
  library: ethers.providers.Web3Provider;
}
export const switchNetwork = async (props: ISwitchNetworkProps): Promise<void> => {
  const { library, network } = props;
  if (!library || !library.provider || !library.provider.request) {
    alertService.errorAlert({ title: CONNECTION_ERROR__TITLE, message: 'Please refresh the page and try again' });
    return;
  }
  try {
    await library.provider?.request(getRequestSwitchForm(network));
  } catch (switchError: any) {
    alertService.errorAlert({ title: CONNECTION_ERROR__TITLE, message: switchError?.message });
  }
};
export const switchNetworkByWallet = async (props: ISwitchNetworkWalletProps): Promise<boolean> => {
  const { library } = props;

  const network = await library.getNetwork();
  const customProvider = library.provider as unknown as any;

  if (network.chainId !== Config.networkChainId) {
    if (customProvider?.provider?.bridge === WALLET_CONNECT__BRIDGE_LINK) {
      alertService.errorAlert({ title: CONNECTION_ERROR__TITLE, message: `Please change network to ${Config.networkName}` });
      return false;
    }
    await switchNetwork({ library, network: Config.networkChainId });
  }
  return true;
};
