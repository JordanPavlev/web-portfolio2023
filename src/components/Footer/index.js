import logo from './logo-contacts.svg'
import github from './github-logo_icon-icons.com_73546.svg'
import linkedin from './linkedin_black_logo_icon_147114.svg'
import email from './newemailoutlinesymbolinblackcircularbutton_104753.svg'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

const Footer = () => {
  library.add(faHand)
  return (
    <section className="footer">
      <div className="start-project">
        <span className="title">
          <div className="title-line"></div>
          <h2>Start a project</h2>
        </span>
        <p>
          Interested in working together? We should <br /> queue up a time to
          chat. I’ll buy the coffee.
        </p>

        <Link to="/contact" className="contact-btn">
          <FontAwesomeIcon icon="hand" /> Let's do it!
        </Link>
      </div>
      <div className="content">
        <img className="logo" src={logo} alt="logo"></img>
        <h2 className="sub-header">
          Living, learning, & leveling up
          <br /> one day at a time.
        </h2>
        <div className="socials-container">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/JordanPavlev">
            <img className="socials" src={github} alt="logo"></img>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jordan-pavlev-425383238/">
            <img className="socials" src={linkedin} alt="logo"></img>
          </a>
          <a href='mailto:jordanpavlev@gmail.com'><img className="socials" src={email} alt="logo"></img></a>
        </div>
      </div>
    </section>
  )
}

export default Footer
