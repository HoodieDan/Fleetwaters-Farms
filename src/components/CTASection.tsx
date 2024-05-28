import '../assets/styles/CTA-section.scss'
import ctaImage from '../assets/images/CTA.png'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)

function CTASection() {

    useEffect(() => {

        new SplitType('.sub')

        gsap.fromTo('.sub', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.5, opacity: 1, scrollTrigger: {
            trigger: '.sub',
        } })
        gsap.fromTo('.spicy', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.7, opacity: 1,scrollTrigger: {
            trigger: '.spicy',
        } })
        gsap.fromTo('.email', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.8, opacity: 1,scrollTrigger: {
            trigger: '.email',
        } })
        gsap.fromTo('.cta', { x:'2.5rem', opacity: 0 }, { x:0, ease: 'Expo.easeOutIn', delay: 1, opacity: 1,scrollTrigger: {
            trigger: '.cta',
        } })

    }, [])

    return (
        <div className="cta">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-6 col-md-6 p-5">
                        <h4 className='mb-3 sub'>Subscribe to our newsletter</h4>
                        <p className='mb-4 spicy'>Get spicy updates on the latests African meals, recipes, fruits and much more.</p>
                        <div className="email">
                            <input type="text" placeholder='Your E-mail Address' />
                            <button className="btn">
                                <ArrowForwardOutlinedIcon className='arrow' />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img src={ctaImage} alt="Call to action image" className='img-fluid h-100 cta' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection;