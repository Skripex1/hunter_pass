interface IContractData {
  price: string;
  presalePrice: string;
  presaleStatus: boolean;
  whitelistStatus: boolean;
  paused: boolean;
  publicMintPerTx: number;
  maxSupply: number;
  isVip: boolean;
  mintedWhitelistNftsByUser: number;
  whitelistMaxPerWallet: number;
  mintedNftsByUser: number;
  currentSupply: number;
}

export default IContractData;
