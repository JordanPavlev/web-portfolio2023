
import { Link } from 'react-router-dom'
import './style.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import  iptracker  from "../Home/iptracker.png"
import  XOgame  from "../Home/XOgame.png"
import solarSystem from "../Home/solar-system.png"




const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','J', 'o','r','d','a','n'];
    const jobArray = ['W','e','b','-','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
      return(
      setLetterClass("text-animate-hover") )
  }, [])  
    return(
            <div className='container'>
             <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>

                <br/> 

                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>'m</span>

                 <AnimatedLetters letterClass={letterClass}
                 strArray={nameArray}
                 index={15}/>

                  <br/> <AnimatedLetters letterClass={letterClass}
                 strArray={jobArray}
                 index={21}/></h1>
                <h2>UI/UX design/Full-stack web development</h2>
                <Link to="/contacts" className='contact-btn'>CONTACT ME</Link>
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

export default Home