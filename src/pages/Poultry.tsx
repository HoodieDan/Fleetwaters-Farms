import '../assets/styles/products.scss';
import meat from '../assets/images/meat.png'
import pork from '../assets/images/pork.png'
import lamb from '../assets/images/lamb.png'
import milk from '../assets/images/milk.png'
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useEffect } from 'react';

function Poultry() {

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
        <div className="poultry product">
            <div className="poultry-header header">
                <div className="container">
                    <h2 className='mb-3 reveal-header'>Poultry</h2>
                    <p className='reveal-text'>We offer quality poultry products available for pickup or delivery</p>
                </div>
            </div>

            <div className="content pt-5 pb-3">
                <div className="container p-4 mt-5 mb-5">
                    <p>
                        Poultry, includes chicken, turkey, duck, and other domesticated birds, 
                        has cemented itself as a staple in diets worldwide.
                        <br></br>
                        <br></br>
                        
                        Nutritional Powerhouse <br />
                        Poultry, especially chicken, is highly regarded for its lean protein content. 
                        It provides essential amino acids necessary for muscle repair and growth, 
                        making it a favorite among athletes and fitness enthusiasts. Additionally, 
                        poultry is rich in vitamins and minerals, including B vitamins (particularly 
                        B6 and B12), which play a crucial role in energy metabolism and brain 
                        function. 

                        <br></br>
                        <br></br>
                        Health Benefits <br />
                        Incorporating poultry into one's diet can offer numerous health advantages. 
                        Unlike red meats, poultry has lower levels of saturated fat, which can 
                        help in maintaining healthy cholesterol levels and reducing the risk of 
                        cardiovascular diseases. Moreover, poultry is an excellent source of 
                        omega-6 fatty acids, which are beneficial for brain function and cell growth.
                        <br />
                        <br />

                        Environmental Considerations <br />
                        Compared to other livestock, poultry has a smaller environmental footprint. 
                        Poultry farming requires less land and water and generates lower greenhouse 
                        gas emissions. Innovations in feed efficiency and waste management further 
                        enhance the sustainability of poultry production, aligning with global 
                        efforts to reduce environmental impacts.
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
                                <img src={meat} alt="meat" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Meat</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={pork} alt="pork" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Pork</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={lamb} alt="lamb" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Lamb</p>
                                    <button className="btn">
                                        Get a quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-3">
                            <div className="quote-card p-3">
                                <img src={milk} alt="milk" className='img-fluid' />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <p className='mb-0'>Milk</p>
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

export default Poultry;