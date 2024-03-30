import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='Hero'>
        <div className="hero-text container">
            <h1>We ensure bettr education for a better wordld</h1>
            <p>Our Cutting-edge curriculum is designed to empower students with the knowledge, skill, and the experiences needed to excel in the dynamic field of education</p>
            <button className='btn'> Explore More <img src={dark_arrow} alt="" /></button>
        </div>

      
    </div>
  )
}

export default Hero
