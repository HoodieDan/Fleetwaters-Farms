import '../assets/styles/about-section.scss'
import aboutImg from '../assets/images/about-img.png';
import dots from '../assets/images/dots.png';

function AboutSection() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5 ps-5">
                        <h4 className=''>About Us</h4>
                        <p className='mb-5'>We are a Multi-faceted African Agribusiness Company in 
                            Nigeria looking to solve problems in agriculture and 
                            ensuring food availability through efficient farming 
                            and food production methods thereby raising agribusiness 
                            models to the next level.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-2 col-0"></div>
                    <div className="col-lg-5 col-md-5 p-5">
                        <img src={aboutImg} alt="about image" className='img-fluid' />
                        <img src={dots} alt="dots" className='dots img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;