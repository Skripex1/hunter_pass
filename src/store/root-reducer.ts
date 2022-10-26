import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './reducers/app-reducer';
import blockchainReducer from './reducers/blockchain-reducer';
import contractReducer from './reducers/contract-reducer';

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  app: appReducer,
  contract: contractReducer,
});
export default rootReducer;
