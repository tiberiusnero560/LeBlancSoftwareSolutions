import React from 'react'
import '../../css/About.css'


const About = () => {
  return (
    <div className='about-wrapper'>
         <div className='about-container'>
                <div className='about-container--content'>
                    <h1 className='about-container--content--title'>About Us</h1>
                    <p className='about-container--content--text'>
                        Leblanc Software Solutions is a software development company based in Canada. We specialize in web development, mobile development, and IT consulting services. We are still very small as we just launched, but we intend to grow and become a full-service company for all your software and IT related needs.
                    </p>
                    <p className='about-container--content--text'>
                        For now, we are focusing on a smaller scope of services until we have more developers to better serve our clients. Until that time, we will be serving mostly smaller companies or startups not unlike this one to help them turn their ideas into reality. 
                    </p>
                    <p className='about-container--content--text text3'>
                        A bit about the founder of this company: Kyle Jorden LeBlanc is a 27 year old Canadian that has been working on breaking into the tech industry for some time. He has a passion for technology, futurism, and making an impact on the world. He has always been trying to find a way to improve the lives of people and make an impact, he saw software as an amazing scalable way to do that. The fact that a piece of code can be created with as little as a computer and be able to impact the lives of billions, is something he has always wanted to do.
                        This is his way of starting. 
                    </p>
                </div>
            </div>
    </div>
    )
}

export default About