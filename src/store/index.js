import { createStore, combineReducers } from "redux";

import booksReducer from "../store/modules/books/reducer";
import collectionReducer from "./modules/collection/reducer";

const reducers = combineReducers({
  books: booksReducer,
  collection: collectionReducer,
});

const store = createStore(reducers);

export default store;
