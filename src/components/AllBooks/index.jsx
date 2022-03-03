import { useSelector } from "react-redux";
import BookCard from "../BookCard";

const AllBooks = () => {
  const books = useSelector((store) => store.books);

  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};

export default AllBooks;
