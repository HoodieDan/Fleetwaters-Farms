import '../assets/styles/hero-section.scss'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

function HeroSection() {

    useEffect(()=> {
        new SplitType('.reveal-header')
        new SplitType('.reveal-text')

        const timeline = gsap.timeline({ ease: 'Expo.easeOutIn', duration: 0.7, delay:0 })

        timeline.fromTo('.reveal-header', { y:'2.5rem', opacity: 0 }, { y:0, stagger: 0.05, delay: 0.1, opacity: 1, })
        timeline.fromTo('.reveal-text', { y:'2.5rem', opacity: 0 }, { y:0, stagger: 0.05, delay: 0.1, opacity: 1, })
        timeline.fromTo('.reveal-button', { y:'2.5rem', opacity: 0 }, { y:0, stagger: 0.05, delay: 0.1, opacity: 1, })
    }, [])

    return (
        <div className="hero">
            <div className="vignette">
                <div className="container">
                    <div className="content">
                        <h1 className='reveal-header desktop' id='header'>Welcome to</h1>
                        <h1 className='reveal-header mb-3 desktop' id='header2'>Fleetwater Farms</h1>
                        <h1 className='reveal-header mb-3 mobile' id='header'>Welcome to Fleetwater Farms</h1>
                        <p className='reveal-text mb-3 desktop'>Revolutionizing agriculture with cutting-edge solutions, 
                            we ensure abundant harvests and sustainable food production.
                        </p>
                        <p className="reveal-text mobile mb-3">
                            We are a Multi-faceted African Agribusiness Company in Nigeria 
                            looking to solve problems in agriculture and ensuring food availability 
                            through efficient farming and food production methods thereby raising 
                            agribusiness models to the next level.
                        </p>
                        <button className="reveal-button btn mt-4">
                            Get a quote
                            <ArrowForwardOutlinedIcon className='arrow-right' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;