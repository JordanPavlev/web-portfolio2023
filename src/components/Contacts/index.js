import Layout from '../Layout';
import Sidebar from '../Sidebar';
import './style.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { send } from 'emailjs-com';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const [toSend, setToSend] = useState({
      name: '',
      email: '',
      comment: '',
    });

    useEffect(() => {
        return(
        setLetterClass("text-animate-hover") )
    }, []);

    const handleSubmit = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });

    }

    const onSubmit = (e) => {
      e.preventDefault();

      send(
        'service_x1lmcj6',
        'template_ykwhceg',
        toSend,
        'KShGvu91juY-24_YR'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
        
        document.getElementById("button-blue").style.backgroundColor = "#59e509";
       
          

        
        
        
        setToSend(
          {
            name: '',
            email: '',
            comment: '',
          }
        )

        
        
        
    }


  
    return (
        <>
        <div className='contact-page'>
        <div className="div-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in different opportunities - especially ambitious or
            large projects.<br/> You can always contact me vie my e-mail: jordanpavlev@gmail.com or Discord: Jordan03#8064. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p> 
          </div> 
          
          <div className='contact-form'>
            <form onSubmit={onSubmit}   class="form" id="form1">
              
              <p class="name">
                <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" value={toSend.name} onChange={handleSubmit} placeholder="Name" id="name" />
              </p>
              
              <p class="email">
                <input name="email" value={toSend.email} onChange={handleSubmit} type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
              </p>
              
              <p class="text">
                <input name="comment" type="text" value={toSend.comment} onChange={handleSubmit} class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment" />
              </p>
                <div class="submit">
                  <button type="submit" placeholder='SEND'  id="button-blue">SEND</button>
                </div>
                
            </form>
          </div>
    </div>
    </>
    )
}

export default Contacts