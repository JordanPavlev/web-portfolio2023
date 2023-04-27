import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo-contacts.png'
import messages from './12.svg'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Contact = () => {
  library.add(faTrash, faHome)
  // document.title = 'Contact | Jordan Pavlev';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };



  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="container">
      <header className="header">
        <img alt="project preview" src={logo} className="image-header" />
        <div className="icons">
          <FontAwesomeIcon onClick={handleReset} icon="trash" />
          <Link to="/" className="mentorship">
            <FontAwesomeIcon icon="fa-home" />
          </Link>
        </div>
      </header>
     
        <h1 className="title">
          Thanks for taking the time to reach out.
          <br /> How can I help you today?
        </h1>
        <img className='messages' src={messages} alt='message-delivery'></img>
      <div className="form-wrapper">
        <form
          className="message-form"
          action="https://usebasin.com/f/031d106fb0db"
          method="POST"
        >
          <div className="input-wrapper">
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <textarea
            type="text"
            value={formData.message}
            onChange={handleInputChange}
            id="message"
            rows={8}
            cols={40}
            name="message"
            placeholder="Enter a message..."
            required
          />

          <button onSubmit={handleReset} className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
