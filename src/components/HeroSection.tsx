import '../assets/styles/hero-section.scss'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function HeroSection() {
    return (
        <div className="hero">
            <div className="container">
                <div className="content">
                    <h1 className='mb-3'>Welcome to Fleetwater Farms</h1>
                    <p className='mb-3'>Revolutionizing agriculture with cutting-edge solutions, 
                        we ensure abundant harvests and sustainable food production.
                    </p>
                    <button className="btn mt-4">
                        Get a quote
                        <ArrowForwardOutlinedIcon className='arrow-right' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;