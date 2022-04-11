import React from 'react'
import '../../css/Services.css'

const Services = () => {
  return (
    <div className='services-wrapper'>
            <div className='services-container'>
                    <div className='services-container--content'>
                        <h1 className='services-container--content--title'>Services</h1>
                     
                     <div className="services-container--grid--container">
                        <div className="services-container--grid--container--item">
                            <div className="services-container--grid--container--item--content">
                                <h2 className="services-container--grid--container--item--content--title">Web Development</h2>
                                <p className="services--grid--container--text">
                                    We specialize in creating websites and web applications. We can build your website from scratch or we can build it from a template. Whether you need a simple portfolio website to make yourself look professional or you need a fully functional website to sell your products, we can help.
                                </p>

                            </div>

                        </div>

                        <div className="services-container--grid--container--item">
                            <div className="services-container--grid--container--item--content">
                                <h2 className="services-container--grid--container--item--content--title">App Development</h2>
                                <p className="services--grid--container--text">
                                    We specialize in creating cross platform mobile applications. We can build your mobile application from scratch or we can build it from a template. We can work with you along the way to make sure your app is everything you thought it could be. We use React Native which allows for a single codebase to be used for both iOS and Android and Web which allows for maintainability and scalability.
                                </p>

                            </div>

                        </div>

                        <div className="services-container--grid--container--item">
                            <div className="services-container--grid--container--item--content">
                                <h2 className="services-container--grid--container--item--content--title">IT Consulting</h2>
                                <p className="services--grid--container--text">
                                    Perhaps you are not sure exactly what you need yet. You may have an idea, but not know exactly what it needs to be implemented. You don't want to waste money on hardware you didn't need, or pay for licenses for software that you could have gotten away with using a free open source version of. We offer free consultations to get an idea of what your needs are and if are a suitable fit for them. 
                                </p>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
    </div>
        )
}



export default Services