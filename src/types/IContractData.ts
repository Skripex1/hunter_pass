import IContractPrices from './IContractPrices';
import IContractSupplies from './IContractSupplies';
import ISalePhase from './ISalePhase';

interface IContractData {
  balance: number;
  salePhase: ISalePhase;
  mintedNftsByUser: number;
  reveal: boolean;
  supplies: IContractSupplies;
  walletOfOwner: any[];
  maxPerWallet: number;
  currentPrice: string;
  currentSupply: number;
  prices: IContractPrices;
}

export default IContractData;
