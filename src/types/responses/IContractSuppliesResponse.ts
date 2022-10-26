import { BigNumber } from 'ethers';

interface IContractSuppliesResponse {
  maxSupply: BigNumber;
  genesisSupply: BigNumber;
  alphaSupply: BigNumber;
  genesisOpenSupply: BigNumber;
  alphaOpenSupply: BigNumber;
}

export default IContractSuppliesResponse;
