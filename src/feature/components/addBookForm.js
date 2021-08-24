import React from 'react';

const AddBookForm = () => (
  <section>
    <h2>ADD NEW BOOK</h2>
    <form className="bookForm">
      <input
        type="text"
        name="postTitle"
        placeholder="Book Title"
        value="title"
      />
      <select>
        <option value="" placeholder="Category">Cat</option>
      </select>
      <button type="submit">
        ADD BOOK
      </button>
    </form>
  </section>
);

export default { AddBookForm };
