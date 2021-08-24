import { createSlice } from '@reduxjs/toolkit'


const initialState = [
  { bookId: '1', category: 'Action', title: 'The Hunger Games', author: 'Suzanne Collins',
   status: {percentage: '64', completed: 'Completed'},
   currentChapter: {chapter: 'Chapter 17', progress: 'UPDATE PROGRESS'} },
  { bookId: '2', category: 'Science Fiction', title: 'Dune', author: 'Frank Herbert', 
    status: {percentage: '8', completed: 'Completed'}, 
    currentChapter: {chapter: 'Chapter3', progress: 'UPDATE PROGRESS'} },
  { bookId: '3', category: 'Economy', title: 'Twenty-First Century',  author: 'Mih Julius', 
  status: {percentage: '0', completed: 'Completed'}, 
  currentChapter: {chapter: 'Introduction', progress: 'UPDATE PROGRESS'}}
]

const booksSlice = createSlice({
  name: 'books',
  initialState,
   reducers: {}
  })

  export const { bookAdded } = booksSlice.actions

  export default booksSlice.reducer
