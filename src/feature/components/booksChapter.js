import React from 'react'
import { useSelector } from 'react-redux'

export const BooksChapter = ({ bookId }) => {
  const bookChapter = useSelector(state =>
    state.books.find(book => book.bookId === bookId)
  )

  return (
    <div className="bookStatus">
      <h5>CURRENT CHAPTER</h5>
      <h4>{bookChapter.currentChapter.chapter}</h4>
      <h6>{bookChapter.currentChapter.progress}</h6>
    </div>
  )
}