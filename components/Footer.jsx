import Image from "next/image"
import Logo from '../assets/logoblack.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='main-footer'>
      <div className="top">
        <div className="area">
          <div className="right-area-side">
            <Image src={Logo} height={200} className='footer-image' width={200} priority='true' alt='the reveal logo'/>
          </div>

          <div className="logo-line"></div>
        </div>
        <div className="area">
          <div className="right-area-side">
            <h3>Office Hours</h3>
            <p>Monday - Friday 07:30am to 16:30pm</p>
            <p>Saturday 09:00am to 13:00pm</p>
          </div>

          <div className="area-line"></div>
        </div>
        <div className="right-area-side">
          <h3>comex homes</h3>
          <p>Hurligham Telkom Plaza. 1st Floor.</p>
          <p>Phone : +254111055155</p>
        </div>
      </div>

      <div className="bottom">
        <p>The Reveal &copy; 2023</p>
      </div> 
    </div>
  )
}

export default Footer