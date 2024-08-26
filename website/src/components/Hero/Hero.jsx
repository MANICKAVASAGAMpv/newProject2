import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting edge curriculum is designed to empower students with the
            knowledge, skills and experiences needed to excel in dynamic field of 
            education
            </p>
            <button className='btn'>Explore menu <img src={dark_arrow}/></button>
        </div>

    </div>
  )
}

export default Hero