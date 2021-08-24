import React from 'react'
import { Link } from 'react-router-dom'
import profileIcon from './profileIcon.png'


export const Navbar = () => {
  return (
    <nav>
      <section className="navContent">
        <div className="leftNavContent">
          <h1 className="booksStoreLogo">Bookstore CMS</h1>
          <div className="navLinks booksLink">
            <Link to="/">BOOKS</Link>
          </div>
          <div className="navLinks categoriesLink">
            <Link to="/">CATEGORIES</Link>
          </div>
        </div>

        <div className="rightNavContent">
          <img className="profileIcon" src={profileIcon} alt="Profile Icon" />
        </div>
      </section>
    </nav>
  )
}
