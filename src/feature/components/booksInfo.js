import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const BooksInfo = ({ bookId }) => {
  const info = useSelector(state =>
    state.books.find(book => book.bookId === bookId)
  )

  return (
    <div className="bookInfo">
      <h6 className="info">{info.category}</h6>
      <h4 className="info">{info.title}</h4>
      <h6 className="info">{info.author}</h6>
      <div>
      <Link className="navLinks" to="/">Comments</Link>
      <Link className="navLinks" to="/">Remove</Link>
      <Link className="navLinks" to="/">Edit</Link>
      </div>
    </div>
  )
}