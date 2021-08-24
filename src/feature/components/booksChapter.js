import React from 'react'
import { useSelector } from 'react-redux'

export const booksChapter = ({ bookId }) => {
  const bookChapter = useSelector(state =>
    state.books.find(book => book.bookId === bookId)
  )

  return (
    <div className="bookStatus">
      <h2>{bookChapter.currentChapter.chapter}</h2>
      <h4>{bookChapter.currentChapter.progress}</h4>
    </div>
  )
}