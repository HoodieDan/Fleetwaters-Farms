import '../assets/styles/products-section.scss'
import tomato from '../assets/images/tomato.png';
import peppers from '../assets/images/peppers.png';
import catfish from '../assets/images/catsfish.png';
import broilers from '../assets/images/broilers.png';
import livestock from '../assets/images/livestock.png';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)

function ProductsSection() {

    useEffect(() => {

        new SplitType('.header')

        gsap.fromTo('.header', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.5, opacity: 1, scrollTrigger: {
            trigger: '.header',
        } })
        gsap.fromTo('.text', { y:'2.5rem', opacity: 0 }, { y:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.7, opacity: 1,scrollTrigger: {
            trigger: '.text',
        } })
        gsap.fromTo('.col-lg-2.col-md-3', { x:'2.5rem', opacity: 0 }, { x:0, ease: 'Expo.easeOutIn', stagger: 0.5, delay: 0.7, opacity: 1,scrollTrigger: {
            trigger: '.col-lg-2.col-md-3',
        } })

    }, [])

    return (
        <div className="products">
            <div className="container">
                <h4 className='mb-3 header'>Our Products</h4>
                <p className="mb-5 text">All our products are organically grown and groomed with the best materials.</p>

                <div className="row">
                    <div className="col-lg-2 col-md-3 col-auto me-3">
                        <div className="yellow">
                            <img src={tomato} alt="tomato" className='product-image img-fluid' />
                        </div>
                        <p className='mt-3'>Tomato</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-auto me-3">
                        <div className="yellow">
                            <img src={peppers} alt="tomato" className='product-image img-fluid' />
                        </div>
                        <p className='mt-3'>Peppers</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-auto me-3">
                        <div className="yellow">
                            <img src={catfish} alt="tomato" className='product-image img-fluid' />
                        </div>
                        <p className='mt-3'>Catfish</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-auto me-3">
                        <div className="yellow">
                            <img src={broilers} alt="tomato" className='product-image img-fluid' />
                        </div>
                        <p className='mt-3'>Broilers</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-auto">
                        <div className="yellow">
                            <img src={livestock} alt="tomato" className='product-image img-fluid' />
                        </div>
                        <p className='mt-3'>Livestock</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsSection;