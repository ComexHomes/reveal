import Image from "next/image"
import banner from '../assets/One bed (1).jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Homebanner() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="zoom-in" className="main-banner">
      <Image priority='true' className="banner-image" src={banner} alt='banner'/>

      <div className="text">
        <h1>The Reveal</h1>
        <h3>Kabarnet Road</h3>
      </div>
    </div>
  )
}

export default Homebanner
