import { ADD_BOOK, DEL_BOOK } from "./actionTypes";

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  newBook,
});

export const deleteBook = (removedBook) => ({
  type: DEL_BOOK,
  removedBook,
});
