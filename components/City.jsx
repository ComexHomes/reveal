import {TbSwimming} from 'react-icons/tb'
import {GiLift} from 'react-icons/gi'
import {MdBusinessCenter} from 'react-icons/md'
import {FaCouch} from 'react-icons/fa'
// import {BiRestaurant} from 'react-icons/bi'
import {AiOutlineCoffee} from 'react-icons/ai'
import {CgGym} from 'react-icons/cg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

function City() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='city'>
      <div className="top">
        <h2>Designed for</h2>
        <h2 className='uppercase two'>living</h2>
      </div>
      <div className="bottom-city">
        <div className='city-card'>
          <TbSwimming className='icon-city' color={'#777777'}/>
          <h3>rooftop swimming pool</h3>
        </div>

        <div className='city-card'>
          <GiLift className='icon-city' color={'#777777'}/>
          <h3>Two high speed lift</h3>
        </div>

        <div className='city-card'>
          <MdBusinessCenter color={'#777777'} className='icon-city' />
          <h3>Business Center</h3>
        </div>

        <div className='city-card'>
          <FaCouch color={'#777777'} className='icon-city' />
          <h3>Resident Lounge</h3>
        </div>

        <div className='city-card'>
          <CgGym className='icon-city' color={'#777777'}/>
          <h3>Gym</h3>
        </div>

        <div className='city-card'>
          <AiOutlineCoffee className='icon-city' color={'#777777'}/>
          <h3>Coffee Shop</h3>
        </div>
        
      </div>

      <div style={{marginTop:'30px'}} className='btn-area'>
          <Link href={'/amenities/#amenities'}>
            <button className="btn">check out more</button>
          </Link>
          </div>

    </div>
  )
}

export default City