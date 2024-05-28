import '../assets/styles/products.scss';
import rice from '../assets/images/rice.png'
import wheat from '../assets/images/wheat.png'
import vegetable from '../assets/images/vegetable.png'
import corn from '../assets/images/corn.png'
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useEffect } from 'react';

function Crops() {

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
        <div className="crops product">
            <div className="crops-header header">
                <div className="container">
                    <h2 className='mb-3 reveal-header'>Crops</h2>
                    <p className='reveal-text'>We offer quality crop products available for pickup or delivery</p>
                </div>
            </div>

            <div className="content pt-5 pb-3">
                <div className="container p-4 mt-5 mb-5">
                    <p>
                        Crops are the backbone of human sustenance, providing 
                        the bulk of the food we consume and the raw materials for numerous 
                        products. They have been integral to human civilization for thousands 
                        of years, evolving from wild varieties to the highly specialized and 
                        productive strains we rely on today.
                        <br />
                        Crops can be broadly categorized into food crops, feed crops, fiber 
                        crops, oil crops, and industrial crops. Food crops, like rice, wheat, 
                        corn, and potatoes, are directly consumed by humans and are staples in 
                        many diets worldwide. Feed crops, such as alfalfa and clover, are 
                        primarily grown for livestock consumption, supporting the meat, dairy, 
                        and poultry industries. Fiber crops, including cotton, flax, and hemp, 
                        are essential for producing textiles. Oil crops like soybeans, sunflower, 
                        and canola are processed to extract oils used in cooking and industrial 
                        applications. Industrial crops, such as rubber and tobacco, have various 
                        commercial uses beyond food and textiles.
                        <br />
                        <br />
                        
                        Cultivation practices vary significantly depending on the crop and the region. 
                        Traditional methods often involve plowing, sowing, irrigating, and harvesting, 
                        with many regions incorporating advanced techniques to increase yield and 
                        efficiency.  
                        <br />
                        Crops play a crucial economic role, supporting millions of farmers 
                        and contributing to national economies. Major crop-producing countries 
                        like China, India, the United States, and Brazil dominate the global 
                        market, influencing food prices and trade policies. However, the 
                        environmental impact of crop production is a growing concern.
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
                                <img src={rice} alt="rice" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Rice</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={wheat} alt="wheat" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Wheat</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={vegetable} alt="vegetable" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Vegetable</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={corn} alt="corn" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Corn</p>
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

export default Crops;