import '../assets/styles/products.scss';
import catfish from '../assets/images/catfish.png'
import mackerel from '../assets/images/mackerel.png'
import hake from '../assets/images/hake.png'
import herring from '../assets/images/herring.png'
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useEffect } from 'react';

function Fishes() {

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
        <div className="fishes product">
            <div className="fishes-header header">
                <div className="container">
                    <h2 className='mb-3 reveal-text'>Fishes</h2>
                    <p className='reveal-text'>We offer quality livestock products available for pickup or delivery</p>
                </div>
            </div>

            <div className="content pt-5 pb-3">
                <div className="container p-4 mt-5 mb-5">
                    <p>
                        Fishes, a diverse group of aquatic vertebrates, are among the most fascinating 
                        creatures inhabiting our planet's waters. From the shimmering scales of the 
                        tropical angelfish to the formidable presence of the great white shark, 
                        fishes exhibit an extraordinary variety in form, function, and habitat.
                        <br />
                        <br />
                        Diversity and Adaptation <br />
                        There are over 33,000 known species of fishes, making them the most diverse 
                        group of vertebrates. They inhabit a wide range of environments, from the 
                        deepest ocean trenches to the highest mountain streams. This incredible 
                        diversity is a result of millions of years of evolution, enabling them 
                        to adapt to various ecological niches.
                        <br />
                        For instance, the goby fish can survive in both fresh and saltwater, 
                        making it a model of adaptability. On the other hand, the deep-sea 
                        anglerfish has developed bioluminescence to attract prey in the pitch-black 
                        depths of the ocean.
                        <br />
                        <br />
                        Fishes play a critical role in aquatic ecosystems. They are a vital link in 
                        the food chain, acting both as predators and prey. Small fish like sardines 
                        and anchovies feed on plankton and in turn, are preyed upon by larger fish, 
                        birds, and marine mammals. This balance helps maintain the health of marine 
                        and freshwater environments.
                        <br />
                        Additionally, fishes contribute to the economy and food security of many 
                        communities worldwide. Fisheries and aquaculture are major sources of 
                        protein and livelihood for millions of people. Sustainable fishing practices 
                        and conservation efforts are essential to protect these resources from overexploitation 
                        and environmental degradation.
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
                                <img src={catfish} alt="catfish" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Catfish</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={mackerel} alt="mackerel" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Mackerel (a.k.a Titus)</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={hake} alt="hake" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Hake fish (a.k.a Panla)</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={herring} alt="herring" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Herring fish (a.k.a Shawa)</p>
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

export default Fishes;