import '../assets/styles/about-section.scss'
import aboutImg from '../assets/images/about-img.png';
import dots from '../assets/images/dots.png';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)


function AboutSection() {

    useEffect(() => {

        new SplitType('.about-header')

        gsap.fromTo('.about-header', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.5, opacity: 1, scrollTrigger: {
            trigger: '.about-header',
        } })
        gsap.fromTo('.about-text', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.7, opacity: 1,scrollTrigger: {
            trigger: '.about-text',
        } })
        gsap.fromTo('.about-img', { x:'-2.5rem', opacity: 0 }, { x:0, ease: 'Expo.easeOutIn', delay: 0.8, opacity: 1,scrollTrigger: {
            trigger: '.about-img',
        } })
        gsap.fromTo('.dots', { x:'-2.5rem', opacity: 0 }, { x:0, ease: 'Expo.easeOutIn', delay: 1, opacity: 1,scrollTrigger: {
            trigger: '.dots',
        } })

    }, [])

    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5 ps-5">
                        <h4 className='about-header'>About Us</h4>
                        <p className='mb-5 about-text'>We are a Multi-faceted African Agribusiness Company in 
                            Nigeria looking to solve problems in agriculture and 
                            ensuring food availability through efficient farming 
                            and food production methods thereby raising agribusiness 
                            models to the next level.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-2 col-0"></div>
                    <div className="col-lg-5 col-md-5 p-5">
                        <img src={aboutImg} alt="about image" className='img-fluid about-img' />
                        <img src={dots} alt="dots" className='dots img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;