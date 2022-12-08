import { MerkleTree } from 'merkletreejs';
import { keccak256 } from 'ethers/lib/utils';
import { isDevelopmentMode } from '../config/config';
import ISalePhase from '../types/ISalePhase';
import { vipAddresses } from '../constants/vip-addresses';
import { whitelistAddresses } from '../constants/whitelist-addresses';

const initMerkleTree = (address: string, stage: ISalePhase) => {
  let addresses;
  if (stage === ISalePhase.VIP) {
    addresses = vipAddresses;
  }
  if (stage === ISalePhase.WHITELIST) {
    addresses = whitelistAddresses;
  }
  const leaves = addresses.map(x => {
    try {
      return keccak256(x);
    } catch {
      console.log('Error: ', x);
    }
    return '';
  });
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const buf2hex = (x: Buffer) => `0x${x.toString('hex')}`;
  if (isDevelopmentMode()) console.log(buf2hex(tree.getRoot()));
  const leaf = keccak256(address); // address from wallet using walletconnect/metamask
  const proof = tree.getProof(leaf).map(x => buf2hex(x.data));
  return proof;
};
export default initMerkleTree;
