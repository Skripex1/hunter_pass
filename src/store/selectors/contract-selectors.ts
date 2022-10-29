/* eslint-disable no-unsafe-optional-chaining */
import { RootState } from '..';
import IContractData from '../../types/IContractData';
import ISalePhase from '../../types/ISalePhase';

export const contractLoadingSelector = (state: RootState): boolean => state.contract.loading;
export const contractDataSelector = (state: RootState): IContractData => state.contract.data;
export const contractSalePhaseSelector = (state: RootState): ISalePhase => state.contract?.data?.salePhase;

export const contractIsPresaleOpen = (state: RootState): boolean => {
  const salePhase = contractSalePhaseSelector(state);
  switch (salePhase) {
    case ISalePhase.ALPHA_PRESALE:
    case ISalePhase.OPEN_ALPHA_PRESALE:
    case ISalePhase.OPEN_GENESIS_PRESALE:
    case ISalePhase.GENESIS_PRESALE:
      return true;
    default:
      return false;
  }
};

export const contractIsGenesisPhaseSelector = (state: RootState): boolean => {
  const salePhase = contractSalePhaseSelector(state);
  switch (salePhase) {
    case ISalePhase.GENESIS_PRESALE:
    case ISalePhase.GENESIS_PUBLIC:
    case ISalePhase.OPEN_GENESIS_PRESALE:
    case ISalePhase.OPEN_GENESIS_SALE:
      return true;
    default:
      return false;
  }
};
export const contractGetGenesisQuantitySelector = (state: RootState): number => {
  const contractData = contractDataSelector(state);
  const isGenesis = contractIsGenesisPhaseSelector(state);
  if (contractData?.supplies?.maxSupply === contractData?.currentSupply) {
    return contractData?.supplies?.genesisOpenSupply + contractData?.supplies?.genesisSupply;
  }
  if (isGenesis) {
    const remainingGenesis = contractData?.supplies?.maxSupply - contractData?.currentSupply;
    console.log(remainingGenesis);
    return 0;
  }
  return contractData?.supplies?.genesisOpenSupply + contractData?.supplies?.genesisSupply;
};
export const contractGetAlphaQuantitySelector = (state: RootState): number => {
  const contractData = contractDataSelector(state);
  const isGenesis = contractIsGenesisPhaseSelector(state);
  if (contractData?.supplies?.maxSupply === contractData?.currentSupply) {
    return contractData?.supplies?.genesisOpenSupply + contractData?.supplies?.genesisSupply;
  }
  if (!isGenesis) {
    const remainingGenesis = contractData?.supplies?.maxSupply - contractData?.currentSupply;
    console.log(remainingGenesis);
    return 0;
  }
  return contractData.supplies?.genesisOpenSupply + contractData?.supplies?.genesisSupply;
};
