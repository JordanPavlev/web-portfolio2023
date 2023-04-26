import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
import logo from './logo-header-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [click, isClicked] = useState(false)
  library.add(faBars)   
  return (
    <>
      <nav className="navbar header">
        <img alt="project preview" src={logo} className="image-project" />
        <div className="links links-desktop">
          <Link to="/contacts" className="mentorship">
            Mentorship
          </Link>
          <Link to="/contacts" className="contact-btn">
            Say hello
          </Link>
        </div>
        <div className="links links-mobile">
          <div className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          
              <Link to="/contacts" className="mentorship">
                Mentorship
              </Link>
            
           
              <Link to="/contacts" className="contact-btn">
                Say hello
              </Link>
            
          </div>
        </div>
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>
      </nav>
    </>
  )
}
export default Navbar
