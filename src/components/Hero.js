import React from 'react'
import '../css/Hero.css'

import heromobile from '../assets/photos/hero-image/lss-hero-mobile-compressed.jpg'
import medheroimg from '../assets/photos/hero-image/lss-hero-medium-compressed.jpg';
import herodesktop from '../assets/photos/hero-image/lss-hero-4klarge-compressed.jpg';



const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-container--content">
            <picture>
                <source media="(min-width: 1920px)" srcSet={herodesktop} />
                <source media="(min-width: 991px)" srcSet={medheroimg} />
                <source media="(min-width: 479px)" srcSet={medheroimg} />
                <img className='heroimg' src={heromobile} alt="Hero image of a desk of a software developer" />
            </picture>
           
        </div>



    </div>
  )
}

export default Hero