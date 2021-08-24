import React from 'react'
import { useSelector } from 'react-redux'
import { BooksInfo } from './booksInfo'
import { BooksStatus } from './booksStatus'
import { BooksChapter } from './booksChapter'


export const BooksPage = () => {

  const books = useSelector(state => state.books)

  const renderedBooks = books.map(book => (
 
      <div className="booksPageInfo">
        <BooksInfo bookId = {book.bookId} />
        <BooksStatus bookId = {book.bookId} />
        <BooksChapter bookId = {book.bookId} />
      </div>
    
    
  ))
  
  return <>
  {renderedBooks}
  
  </>
}
