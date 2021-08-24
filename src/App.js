import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './feature/components/Navbar'
import { BooksPage } from './feature/components/booksPage'
import { AddBookForm } from './feature/components/addBookForm'

function App() {
  return (
    <Router>
      
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Navbar />
                <BooksPage /> 
                <AddBookForm />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}


export default App;
