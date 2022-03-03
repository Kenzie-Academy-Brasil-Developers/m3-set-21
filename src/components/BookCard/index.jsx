import { useDispatch } from "react-redux";

import { addBook, deleteBook } from "../../store/modules/collection/actions";

const BookCard = ({ book, isRemovable = false }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={
        isRemovable
          ? () => dispatch(deleteBook(book))
          : () => dispatch(addBook(book))
      }
    >
      <img style={{ width: "100px", padding: "10px" }} src={book.img} />
    </div>
  );
};

export default BookCard;
