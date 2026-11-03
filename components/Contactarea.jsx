import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from '../assets/bannertwo.jpg'
import Logo from '../assets/logo.jpg'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Contactarea() {



  return (
    <div className='contact-area'>
      <div className="contact-form-area">
        <div className="contact-form-heading">
            <h1>contact - us</h1>
        </div>

        <div style={{ width: "100%" }}>
          {/* Website Enquiry form in Zoho Forms (info@comexhomes.ke). Every submission is emailed to info@comexhomes.ke. */}
          <iframe
            title="Website Enquiry"
            aria-label="Website Enquiry"
            src="https://forms.zohopublic.com/balozi/form/WebsiteEnquiry/formperma/lMJLwfCsL2F8murEt4IYFdRYU6FWs7a6Xe9Ai3gVfw8?Website=https%3A%2F%2Fwww.thereveal.co.ke"
            style={{ width: "100%", height: "900px", border: "none", background: "#fff", borderRadius: 8 }}
          />
        </div>

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
