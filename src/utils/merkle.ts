import { MerkleTree } from 'merkletreejs';
import { keccak256 } from 'ethers/lib/utils';

const initMerkleTree = (address: string) => {
  const addresses = ['0x8210fdbfd92C20E942abb51fa726245C9DBbBD9F'];
  const leaves = addresses.map(x => keccak256(x));
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const buf2hex = (x: Buffer) => `0x${x.toString('hex')}`;

  console.log(buf2hex(tree.getRoot()));

  const leaf = keccak256(address); // address from wallet using walletconnect/metamask
  const proof = tree.getProof(leaf).map(x => buf2hex(x.data));
  return proof;
};
export default initMerkleTree;
