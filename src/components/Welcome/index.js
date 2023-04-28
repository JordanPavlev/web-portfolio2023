import './style.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import working from '../Welcome/22.svg'
import Navbar from '../Navbar'


const Welcome = () => {
  document.title = 'Welcome | Jordan Pavlev';
  const [letterClass, setLetterClass] = useState('text-animate')
  const letterArray = ['D', 'e', 's', 'i', 'g', 'n', 'e', 'r', " ", 'a', 'n', "d", " ", 'F', 'u', 'l', 'l', 's', 't', 'a', 'c', "k", ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  
  useEffect(() => {
    return (
      setLetterClass('text-animate-hover'))
  }, [])
  return (
    <div className='container-welcome'>
      <Navbar></Navbar>
      <div className='text-zone'>
        <h1>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={letterArray} index={15} />
        </h1>
        <span className='mini-text'>I design and code beautifully simple things, and I love what I do.</span>
      </div>
      <div className='img-container'>
        <img alt='project preview' src={working} className='img-center' />
      </div>
    </div>
  )

}

export default Welcome
