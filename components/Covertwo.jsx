import Image from "next/image"
import cover from '../assets/One bed (9).jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Covertwo() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div>
        <Image data-aos='fade-up' className='coverimage' src={cover} height={500} alt='cover'/>
    </div>
  )
}

export default Covertwo