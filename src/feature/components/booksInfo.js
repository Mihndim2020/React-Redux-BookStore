import React from 'react'
import { useSelector } from 'react-redux'

export const booksInfo = ({ bookId }) => {
  const info = useSelector(state =>
    state.books.find(book => book.bookId === bookId)
  )

  return (
    <div className="bookInfo">
      <h4>{info.category}</h4>
      <h2>{info.title}</h2>
      <h4>{info.author}</h4>
      <div>
      <Link to="/">Comments</Link>
      <Link to="/">Remove</Link>
      <Link to="/">Edit</Link>
      </div>
    </div>
  )
}