import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AddBookForm = () => {
  const [title, setTitle] = useState('')
  const [category, setContent] = useState('')
  
  const dispatch = useDispatch()
  const books = useSelector(state => state.books)

  const onTitleChanged = e => setTitle(e.target.value)
  const onCategoryChanged = e => setContent(e.target.value)

  

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form className="bookForm">
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Book Title"
          value={title}
          onChange={onTitleChanged}
        />
        <select>
          <option value="" placeholder="Category" ></option>
        </select>
        <button>
        ADD BOOK</button>
      </form>
    </section>
  )
}