import logo from './logo-contacts.png'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Contacts = () => {

library.add(faCircleXmark, faRepeat)

  return (
    <div className="container">
      <header className="header">
        <img alt="project preview" src={logo} className="image-header" />
        <div className='icons'>
        <FontAwesomeIcon icon="fa-repeat" />
        <FontAwesomeIcon icon="fa-circle-xmark" />
        </div>
      </header>
      <div className='form-wrapper'>
      <form action="https://usebasin.com/f/031d106fb0db" method="POST">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
        />
        <input
          type="text"
          id="email"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Enter a message..."
          required
        />

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contacts
