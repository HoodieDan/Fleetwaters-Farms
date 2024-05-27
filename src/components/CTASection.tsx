import '../assets/styles/CTA-section.scss'
import ctaImage from '../assets/images/CTA.png'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function CTASection() {
    return (
        <div className="cta">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-6 col-md-6 p-5">
                        <h4 className='mb-3'>Subscribe to our newsletter</h4>
                        <p className='mb-4'>Get spicy updates on the latests African meals, recipes, fruits and much more.</p>
                        <div className="email">
                            <input type="text" placeholder='Your E-mail Address' />
                            <button className="btn">
                                <ArrowForwardOutlinedIcon className='arrow' />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img src={ctaImage} alt="Call to action image" className='img-fluid h-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection;