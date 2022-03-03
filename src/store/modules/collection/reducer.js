import { ADD_BOOK, DEL_BOOK } from "./actionTypes";

const collectionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      const { newBook } = action;
      return [...state, newBook];

    case DEL_BOOK:
      const { removedBook } = action;
      const newBookList = state.filter((book) => book.id !== removedBook.id);

      return newBookList;

    default:
      return state;
  }
};

export default collectionReducer;
