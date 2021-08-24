import React from 'react'
import { useSelector } from 'react-redux'

export const BooksStatus = ({ bookId }) => {
  const bookStatus = useSelector(state =>
    state.books.find(book => book.bookId === bookId)
  )

  return (
    <div className="bookStatus">
      <h4>{bookStatus.status.percentage}</h4>
      <h4>{bookStatus.status.completed}</h4>
    </div>
  )
}