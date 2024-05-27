import '../assets/styles/hero-section.scss'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function HeroSection() {
    return (
        <div className="hero">
            <div className="vignette">
                <div className="container">
                    <div className="content">
                        <h1 className='mb-3'>Welcome to Fleetwater Farms</h1>
                        <p className='mb-3 desktop'>Revolutionizing agriculture with cutting-edge solutions, 
                            we ensure abundant harvests and sustainable food production.
                        </p>
                        <p className="mobile mb-3">
                            We are a Multi-faceted African Agribusiness Company in Nigeria 
                            looking to solve problems in agriculture and ensuring food availability 
                            through efficient farming and food production methods thereby raising 
                            agribusiness models to the next level.
                        </p>
                        <button className="btn mt-4">
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