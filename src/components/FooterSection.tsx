import { NavLink } from 'react-router-dom';
import '../assets/styles/footer-section.scss';
import logo from '../assets/images/fleetfarmslogo.svg'
import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'
import mail from '../assets/images/mail.png'
import x from '../assets/images/twitter.png'
import insta from '../assets/images/insta.png'
import whatsapp from '../assets/images/whatsapp.png'
import facebook from '../assets/images/facebook.png'

function FooterSection() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center mb-3">
                            <img src={logo} alt="logo" />
                            <h6 className='ms-3 mb-0'>Fleetwater Farms</h6>
                        </div>
                        <p className='mb-3'>Seeking the best agricultural products? Reach out to us at Fleetwaters today and get unmatched quality.</p>
                        <div className="flex">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src={x} alt="twitter link" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="instagram link" className='ms-2' />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src={whatsapp} alt="whatsapp link" className='ms-2' />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="facebook link" className='ms-2' />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h5 className='mb-3'>Quick Links</h5>
                        <NavLink to='/' className='link'>About Us</NavLink>
                        <NavLink to='/'  className='link'>Products</NavLink>
                        <NavLink to='/'  className='link'>Livestock</NavLink>
                        <NavLink to='/'  className='link'>Contact Us</NavLink>
                    </div>
                    <div className="col-lg-2">
                        <h5 className='mb-3'>Other Pages</h5>
                        <NavLink to='/'  className='link'>Privacy Policy</NavLink>
                        <NavLink to='/'  className='link'>Products</NavLink>
                        <NavLink to='/'  className='link'>Terms of Use</NavLink>
                        <NavLink to='/'  className='link'>FAQ</NavLink>
                    </div>
                    <div className="col-lg-4">
                        <h5 className='mb-3'>Contact Info</h5>
                        <div className="d-flex align-items-center mb-3">
                            <img src={location} alt="location" className='contact-icon' />
                            <p className='mb-0'>The Fleetwaters farms, off Ajah, Lagos, Nigeria</p>
                        </div>
                        <a href='tel:+2348024316781' className="d-flex align-items-center mb-3">
                            <img src={phone} alt="location" className='contact-icon' />
                            <p className='mb-0'>+234 802 431 6781</p>
                        </a>
                        <a href='mailto:info@fleetwatersfarms.com' className="d-flex align-items-center mb-3">
                            <img src={mail} alt="location" className='contact-icon' />
                            <p className='mb-0'>info@fleetwatersfarms.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;