import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrows Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur delectus odit sunt harum quis ex unde inventore minima quod officiis nisi, vero quam! Quas, ab, at maxime ea fuga fugit dolor  .</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur delectus odit sunt harum quis ex unde inventore minima quod officiis nisi, vero quam! Quas, ab, at maxime ea fuga .</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur delectus odit sunt harum quis ex unde inventore minima quod officiis nisi, vero quam! Quas, ab, at maxime ea  </p>
        </div>
      
    </div>
  )
}

export default About
