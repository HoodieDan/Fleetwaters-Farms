import '../assets/styles/contact.scss';
import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'
import mail from '../assets/images/mail.png'

function Contact() {
    return (
        <div className="contact">
            <div className="header">
                <div className="container">
                    <h2 className='mb-3'>Contact Us</h2>
                    <p>Contact us today to make enquiries.</p>
                </div>
            </div>

            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 p-5">
                        <form className='pe-5 pb-5' action="/">
                            <label htmlFor="name" className='mb-2'>Full Name</label>
                            <input type="text" className='mb-4' placeholder='Type your full name' />

                            <label htmlFor="name" className='mb-2'>Email</label>
                            <input type="text" className='mb-4' placeholder='Add your email' />

                            <label htmlFor="name" className='mb-2'>Customer Request</label>
                            <textarea rows={7} className='mb-4' placeholder='Add your email' />

                            <button className='btn d-block mt-3' type="submit">Send a message</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 p-5">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6703958189296!2d3.4538315744847834!3d6.436362893554805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf501a1595da5%3A0x670c18672f5b64f7!2sFleetwaters%20Limited!5e0!3m2!1sen!2sng!4v1716788236672!5m2!1sen!2sng" 
                            loading="lazy" 
                            className='map'
                            > 
                        </iframe>
                        <div className="d-flex align-items-center mb-3 mt-3">
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

export default Contact;