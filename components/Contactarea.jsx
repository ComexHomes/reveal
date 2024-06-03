import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import Banner from '../assets/bannertwo.jpg'
import Logo from '../assets/logo.jpg'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import Result from './Result'

function Contactarea() {

    const [firstName,setFirstName] = useState('')
    const [secondName,setSecondName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message,setMessage] = useState('')

  // const form = useRef();
  const [result, setResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prk4agt",
        "template_92qp9di",
        e.target,
        "wyL9szuhcFXTO7PpM4yk0"
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

      setResult(true)
  };  

  return (
    <div className='contact-area'>
      <div className="contact-form-area">
        <div className="contact-form-heading">
            <h1>contact - us</h1>
        </div>

        <form className='contact-form' onSubmit={sendEmail}>
            <div className="top-form">
                <div className="input-carrier">
                    <label htmlFor="first name">First Name</label>
                    <input type="text" name='firstName' required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="last name">Last Name</label>
                    <input  type="text" name='secondName' required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="phone number">Phone Number</label>
                    <input type="tel" name='phone' required />
                </div>
            </div>

            <div className="input-carrier">
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' required />
            </div>

            <div className="input-carrier">
                <label htmlFor="message" >Message</label>

                <textarea className='message' name='message'></textarea>
            </div>

            <div className="btn-area">
                <button className="btn-light">submit</button>
            </div>

            <div className='result'>
              {
                result ? <Result/> : null
              }
            </div>
        </form>

        <div className="more-text">
            <p style={{fontSize:'20px', color:'#fff'}}>The Reveal does not share or exchange this information with anyone. All information will be kept confidential.</p>
        </div>
      </div>
      <div className="contact-logo-area">
        <Image className='contact-image-logo-area' src={Banner} height={400} alt='contact image'/>

        <Image className='contact-logo-image-logo-area' src={Logo} alt='CONTACT PAGE logo'/>

        <div className="socials-container">
            <h3>Follow Us</h3>
            <Link href='www.facebook.com' target="_blank">
                <ImFacebook className='social-icon'/>
            </Link>

            <Link href='www.instagram.com' target="_blank">
                <AiOutlineInstagram className='social-icon'/>
            </Link>

            <Link href='www.twitter.com' target="_blank">
                <AiOutlineTwitter className='social-icon'/>
            </Link>

            <Link href='www.linkedin.com' target="_blank">
                <FaLinkedinIn className='social-icon'/>
            </Link>

            <Link href='www.youtube.com' target="_blank">
                <AiFillYoutube className='social-icon'/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Contactarea
