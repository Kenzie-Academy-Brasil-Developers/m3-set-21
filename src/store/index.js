import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import pokemonsReducer from "./modules/pokemons/reducer";

const reducers = combineReducers({ pokemons: pokemonsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
