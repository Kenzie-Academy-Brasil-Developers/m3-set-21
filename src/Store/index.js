import { createStore, combineReducers } from "redux";

import walletReducer from "../Store/Modules/Wallet/reducer";

const reducers = combineReducers({ wallet: walletReducer });

const store = createStore(reducers);

export default store;
