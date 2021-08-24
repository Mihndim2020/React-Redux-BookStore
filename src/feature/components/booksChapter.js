import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const BooksChapter = ({ bookId }) => {
  const bookChapter = useSelector((state) => state.books.find((book) => book.bookId === bookId));

  return (
    <div className="bookStatus">
      <h6 className="currentChapter">CURRENT CHAPTER</h6>
      <h6>{bookChapter.currentChapter.chapter}</h6>
      <h6>{bookChapter.currentChapter.progress}</h6>
    </div>
  );
};

BooksChapter.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default { BooksChapter };
