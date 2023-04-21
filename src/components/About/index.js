import AnimatedLetters from '../AnimatedLetters'
import './style.scss'
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iptracker from '../About/iptracker.png'
import XOgame from '../About/XOgame.png'
import solarSystem from '../About/solar-system.png'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArr = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  useEffect(() => {
    return (
      setLetterClass('text-animate-hover'))
  }, [])
  return (


    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutArr}
            index={15}
          />
        </h1>


        <p>
          I'm very ambitious web developer looking for different and demanding projects to improve my abilities.<br />
          I am learning and working on some freelance projects at the moment, however if you have work offer, get in touch.<br />
          I am full of ideas and different working tools which help me creating the designs and functionalities you want
          <br />
          You can contact me via my e-mail: jordanpavlev@gmail.com or simly use the form above. You can add me in Discord (Jordan03#8064), see some of my work in Git-Hub or my LinkedIn profile.
        </p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faGithub} color='#DD0031' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
          </div>
        </div>
      </div>
      <div className='preview-container'>
        <div className='projects'>
          <div className='project-XO'>
            <img alt='project preview'  src={iptracker} className='image-project'/>
            <div className='middle'>
              <a href='https://jordanpavlev.github.io/ipAddressTracker/' className='text'>Tic-Tac-Toc</a>
            </div>
          </div>

          <div className='project-iptracker'>
            <img alt='project preview' src={XOgame} className='image-project'/>
            <div className='middle'>
              <a href='https://jordanpavlev.github.io/the-tic-tac-toe-game/' className='text'>IP Tracker</a>
            </div>
          </div>

          <div className='project-solar-system'>
            <img alt='project preview' src={solarSystem} className='image-project'/>
            <div className='middle'>
              <a href='https://jordanpavlev.github.io/solar-system-facts/' className='text'>Solar system</a>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default About