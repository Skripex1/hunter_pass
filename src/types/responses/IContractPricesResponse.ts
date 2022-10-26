import { BigNumber } from 'ethers';

interface IContractPricesResponse {
  alphaCost: BigNumber;
  alphaPresaleCost: BigNumber;
  genesisCost: BigNumber;
  genesisPresaleCost: BigNumber;
}

export default IContractPricesResponse;
