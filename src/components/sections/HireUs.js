import React from 'react'
import '../../css/HireUs.css'


const HireUs = () => {
  return (
    <div className='hireus-wrapper'>
       <div className='hireus-container'>
                <div className='hireus-container--content'>
                    <h1 className='hireus-container--content--title'>Hire Us</h1>
                    <p className='hireus-container--content--text'>
                        We are just starting and very small, and that means we need to convince you to use our services. We offer free consultations to get an idea of what your needs are and if we can be a suitable fit for them. Prices will reflect these facts and our services will be targeted towards smaller businesses and startups until we are able to hire additional developers. 
                    </p>
                    <p className='hireus-container--content--text text3'>
                       We offer 90 day money back guarantee. If you are not satisfied with our services, we will refund your money no questions asked. Well, if you don't mind telling us why so I can try to improve in the future i'd appreciate it, but it's not required.
                    </p>

                    <div className='hireus-container--content--button-container'>
                      <div className='hireus-innercontainer--button'>
                        <a href='mailto:sales@leblancsoftwaresolutions.com?subject=Learn More' className='hireus-container--content--button'>Contact Us</a>

                      </div>
                    </div>

                    
                </div>
            </div>

    </div>
  )
}

export default HireUs