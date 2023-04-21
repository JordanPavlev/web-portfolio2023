import './styles.scss'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/images/logoimg.jpg'
import * as React from 'react'
import { render } from 'react-dom'
import GitHubProfile from '../Sidebar/githubprofile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin, faMicrosoft, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='navigation-bar'>
            <Link  className='logo' to='/'>
                <img  src={Logo} alt="Profile image"/>
                
            </Link>
            <nav>
                <NavLink exact="true" activeclassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="black"/>
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="black"/>
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="contact-link" to="/contacts">
                    <FontAwesomeIcon icon={faEnvelope} color="black"/>
                </NavLink>
                    
            </nav>
            <ul>
                <li className='tooltip'>
                    <a target="_blank" rel="norefferer" className='tooltip-item' href="https://github.com/JordanPavlev">
                        <FontAwesomeIcon icon={faGithub} color="black"/>
                    </a>
                    <span className='tooltip-content'><img src={GitHubProfile}/></span>
                </li>

                <li>
                    <a target="_blank" rel="norefferer" href="https://www.youtube.com/channel/UCjBzMRKISUSUc1j3sK9qbfA">
                        <FontAwesomeIcon icon={faYoutube} color="black"/>
                    </a>
                </li>
                
                <li>
                    <a target="_blank" rel="norefferer" href="https://discordapp.com/users/178196547530522625">
                        <FontAwesomeIcon icon={faDiscord} color="black"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/jordan-pavlev-425383238/">
                        <FontAwesomeIcon icon={faLinkedin} color="black"/>
                    </a>
                </li>
            </ul>   
        </div>
    )
}

export default Sidebar;