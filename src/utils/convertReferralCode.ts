import { ethers } from 'ethers';
import { emptyAddress } from '../constants/switch-network-data';

export const getReferralFromUri = (referral: string): string => {
  try {
    return ethers.utils.getAddress(referral.split('/')[1]);
  } catch {
    return emptyAddress;
  }
};
