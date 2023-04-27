import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'
import logo from './logo-header-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setNavbarOpen((prev) => !prev)
    setIsClicked((click) => !click)
  }
  library.add(faBars, faXmark)
  return (
    <>
      <nav className="navbar header">
        <img alt="project preview" src={logo} className="image-project" />
        <div className="links links-desktop">
          <Link to="/contacts" className="contact-btn">
            Say hello
          </Link>
        </div>
        <div className="links links-mobile">
          <div className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
            <Link to="/contacts" className="contact-btn">
              Say hello
            </Link>
          </div>
        </div>
        <button className="toggle" onClick={handleClick}>
          <i className="hamburger">
            {' '}
            {isClicked ? (
              <FontAwesomeIcon icon="fa-xmark" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            )}
          </i>
        </button>
      </nav>
    </>
  )
}
export default Navbar
