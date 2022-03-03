import { useSelector } from "react-redux";

import BookCard from "../BookCard";

const MyBookCollection = () => {
  const collection = useSelector((store) => store.collection);

  console.log(collection);
  return (
    <>
      {collection.map((book) => (
        <BookCard isRemovable key={book.id} book={book} />
      ))}
    </>
  );
};

export default MyBookCollection;
