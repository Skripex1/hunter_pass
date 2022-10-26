import { BigNumber } from 'ethers';
import IContractPrices from '../types/IContractPrices';
import IContractSupplies from '../types/IContractSupplies';
import IContractWalletOfOwner from '../types/IContractWalletOfOwner';
import IContractPricesResponse from '../types/responses/IContractPricesResponse';
import IContractSuppliesResponse from '../types/responses/IContractSuppliesResponse';
import IContractWalletOfOwnerResponse from '../types/responses/IContractWalletOfOwner';

export const mapFromBigNumberToNumber = (data: BigNumber): number => data.toNumber();
export const mapBooleanToBoolean = (data: boolean): boolean => Boolean(data);
export const mapBigNumberToString = (data: BigNumber): string => data.toString();

export const mapFromPricesToPrices = (data: IContractPricesResponse): IContractPrices => ({
  alphaCost: mapBigNumberToString(data?.alphaCost),
  alphaPresaleCost: mapBigNumberToString(data?.alphaPresaleCost),
  genesisCost: mapBigNumberToString(data?.genesisCost),
  genesisPresaleCost: mapBigNumberToString(data?.genesisPresaleCost),
});

export const mapFromSuppliesToSupplies = (data: IContractSuppliesResponse): IContractSupplies => ({
  maxSupply: mapFromBigNumberToNumber(data?.maxSupply),
  alphaSupply: mapFromBigNumberToNumber(data?.alphaSupply),
  alphaOpenSupply: mapFromBigNumberToNumber(data?.alphaOpenSupply),
  genesisSupply: mapFromBigNumberToNumber(data?.genesisSupply),
  genesisOpenSupply: mapFromBigNumberToNumber(data?.genesisOpenSupply),
});
// export const mapWalletOfOwner = (data: [[]]): IContractWalletOfOwner[] => {
//     if(!isArray(data)) {
//         return [];
//     }
//     return [data.map(elem => ({
//         isAlpha: Boolean(elem[0]),
//         tokenId: mapFromBigNumberToNumber(elem[1]);
//     }))]
// }
