import { Link } from 'react-router-dom'
import './style.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import logo from '../Welcome/jordan-logo.png'
import profile from '../Welcome/undraw_pic_profile_re_7g2h.svg'
import working from '../Welcome/22.svg'


const Welcome = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const letterArray = [' ', 'D', 'e', 's', 'i', 'g', 'n', 'e', 'r', ',', ' ', 'F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', '&', ' ', 'M', 'e', 'n', 't', 'o', 'r']
  const jobArray = ['W', 'e', 'b', '-', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    return (
      setLetterClass('text-animate-hover'))
  }, [])
  return (
    <div className='container'>
      <div className='header'>
        <img alt='project preview' src={logo} className='image-project' />
        <div className='links'>
          <Link to='/contacts' className='mentorship'>Mentorship</Link>

          <Link to='/contacts' className='contact-btn'>Say hello</Link>
        </div>
      </div>
      <div className='text-zone'>
        <h1>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={letterArray} index={15} />
        </h1>
        <h2>I design and code beautifully simple things, and I love what I do.</h2>
      </div>
      <div className='profile-img'>
        <img alt='project preview' src={working} className='working' />
      </div>

    </div>
  )

}

export default Welcome
