import React from 'react'
import { useSelector } from 'react-redux'

export const booksStatus = ({ bookId }) => {
  const bookStatus = useSelector(state =>
    state.books.find(book => book.bookId === bookId)
  )

  return (
    <div className="bookStatus">
      <h2>{bookStatus.status.percentage}</h2>
      <h4>{bookStatus.status.completed}</h4>
    </div>
  )
}