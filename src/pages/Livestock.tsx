import '../assets/styles/products.scss';
import cows from '../assets/images/cows.png'
import pigs from '../assets/images/pigs.png'
import sheep from '../assets/images/sheep.png'
import goats from '../assets/images/goats.png'
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useEffect } from 'react';

function Livestock() {

    useEffect(()=> {
        new SplitType('.reveal-header')
        new SplitType('.reveal-text')

        const timeline = gsap.timeline({ ease: 'Expo.easeOutIn', duration: 0.7, delay:0 })

        timeline.fromTo('.reveal-header', { y:'2.5rem', opacity: 0 }, { y:0, stagger: 0.05, delay: 0.1, opacity: 1, })
        timeline.fromTo('.reveal-text', { y:'2.5rem', opacity: 0 }, { y:0, stagger: 0.05, delay: 0.1, opacity: 1, })
        timeline.fromTo('.content', { y:'2.5rem', opacity: 0 }, { y:0, stagger: 0.05, delay: 0.1, opacity: 1, })
        gsap.fromTo('.head', { y:'2.5rem', opacity: 0 }, { y:0, stagger: 0.05, delay: 0.3, opacity: 1, scrollTrigger: {
            trigger: '.head'
        } })
        gsap.fromTo('.col-lg-3', { x:'2.5rem', opacity: 0 }, { x:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.7, opacity: 1,scrollTrigger: {
            trigger: '.col-lg-3',
        } })
    }, [])

    return (
        <div className="livestock product">
            <div className="livestock-header header">
                <div className="container">
                    <h2 className='mb-3 reveal-header'>Livestock</h2>
                    <p className='reveal-text'>We offer quality livestock products available for pickup or delivery</p>
                </div>
            </div>

            <div className="content pt-5 pb-3">
                <div className="container p-4 mt-5 mb-5">
                    <p>
                        Livestock are the domesticated animals raised in an agricultural 
                        setting in order to provide labour and produce diversified products 
                        for consumption such as meat, eggs, milk, fur, leather, and wool. 
                        The term is sometimes used to refer solely to animals who are raised 
                        for consumption, and sometimes used to refer solely to farmed 
                        ruminants, such as cattle, sheep, and goats.[1] Horses are 
                        considered livestock in the United States.[2] The USDA classifies 
                        pork, veal, beef, and lamb (mutton) as livestock, and all livestock 
                        as red meat. Poultry and fish are not included in the category.[3] 
                        The latter is likely due to the fact that fish products are not 
                        governed by the USDA, but by the FDA. 
                        <br></br>
                        <br></br>
                        The breeding, maintenance, slaughter and general subjugation of livestock, 
                        called animal husbandry, is a part of modern agriculture and has been 
                        practiced in many cultures since humanity's transition to farming from 
                        hunter-gatherer lifestyles. Animal husbandry practices have varied widely 
                        across cultures and time periods. It continues to play a major economic 
                        and cultural role in numerous communities. 
                        <br></br>
                        <br></br>
                        Livestock farming practices have largely shifted to intensive animal farming.
                        [4] Intensive animal farming increases the yield of the various commercial 
                        outputs, but also negatively impacts animal welfare, the environment, and 
                        public health.[5] In particular, beef, dairy and sheep are an outsized 
                        source of greenhouse gas emissions from agriculture.
                    </p>
                </div>
            </div>

            <div className="quote-section pt-5 pb-5">
                <div className="container">
                    <div className="head d-flex justify-content-center align-items-center">
                        <hr />
                        <h2 className='m-3'>Get a quote Today</h2>
                        <hr />
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={cows} alt="cows" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Cows</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={pigs} alt="pigs" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Pigs</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={sheep} alt="sheep" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Sheep</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={goats} alt="goats" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Goats</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Livestock;