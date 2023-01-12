import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
        <div className='container contact-page'>
            <h1>Contact Me</h1> 
            <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input placeholder='Name'type="text" name="name" required/>
                    </li>
                    <li className="half">
                        <input type="email" name= "email" placeholder="Email" required />
                    </li>
                    <li >
                        <input type="text" name= "subject" placeholder="Subject" required />
                    </li>
                    <li >
                        <textarea name= "message" placeholder="Message" required />
                    </li>
                    <li >
                        <input type= "submit" className="flat-button" value="SEND" required />
                    </li>
                </ul>
            </form>
            </div>
        </div>
        </>
    )
}

export default Contact