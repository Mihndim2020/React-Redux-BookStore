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
import { CategoryPage } from './feature/components/categoryPage'

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
           <Route exact path="/category" component={CategoryPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}


export default App;
