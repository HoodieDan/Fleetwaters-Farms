import '../assets/styles/homepage.scss'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChoose from '../components/WhyChoose';
import ProductsSection from '../components/ProductsSection';
import CTASection from '../components/CTASection';

function HomePage() {
    return (
        <div className="home">
            <HeroSection />
            <AboutSection />
            <WhyChoose />
            <ProductsSection />
            <CTASection />
        </div>
    )
}

export default HomePage;