import '../assets/styles/why-choose.scss'
import leaf from '../assets/images/leaf.png'
import quality from '../assets/images/quality.png'
import truck from '../assets/images/truck.png'
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)

function WhyChoose() {

    useEffect(() => {

        new SplitType('.header')

        gsap.fromTo('.header', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.5, opacity: 1, scrollTrigger: {
            trigger: '.header',
        } })
        gsap.fromTo('.text', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.7, opacity: 1,scrollTrigger: {
            trigger: '.text',
        } })
        gsap.fromTo('.features', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.7, opacity: 1,scrollTrigger: {
            trigger: '.features',
        } })

    }, [])

    return (
        <div className="why-choose">
            <div className="container">
                <h4 className='mb-3 header'>Why choose Fleetwater Farms?</h4>
                <p className='mb-5 text'>At Fleetwaters, one of our biggest goals is to ensure 
                    the Food production process is efficient for quality 
                    farming practices with minimal impact on the environment 
                    while delivering healthy products to our consumers.
                </p>

                <div className="row features">
                    <div className="col-lg-4 col-md-4">
                        <img src={leaf} alt="leaf" className='mb-3' />
                        <h5 className='mb-3'>100% organic products</h5>
                        <p className="mb-3">All our products are organically grown and 
                            groomed with the best materials that ensure our clients are left 
                            satisfied.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        
                    <img src={quality} alt="leaf" className='mb-3' />
                        <h5 className='mb-3'>Quality Standard</h5>
                        <p className="mb-3">We ensure our products are top quality
                            and meet the required standards set by
                            agricultural boards.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        
                    <img src={truck} alt="leaf" className='mb-3' />
                        <h5 className='mb-3'>Nationwide Delivery</h5>
                        <p className="mb-3">Fleetwaters farms deliver nationwide 
                            across states in Nigeria and will
                            expand to Africa in the coming years.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose;