import '../assets/styles/about-page.scss';
import manInFarm from '../assets/images/man-in-farm.png';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

export default function AboutPage() {
  return (
    <div className='about-page'>
      <div className="about-page-header header">
          <div className="container">
              <h2 className='mb-3 reveal-header'>About Us</h2>
              <p className='reveal-text'>We offer quality livestock products available for pickup or delivery.</p>
          </div>
      </div>

      <div className="container">

        <div className="row mt-5 mb-5">
          <div className="col-lg-12 grey"></div>
          <div className="col-lg-7 started p-5">
            <h3>How it all started</h3>
            <p className='pe-5'>
              Fleet Waters Global Resources Limited was incorporated with 
              Corporate Affairs Commission (CAC), Abuja July, 2011 as an integrated 
              downstream and upstream sector Oil & Gas/Water Treatment Company. 
              A prominent player in warehousing, distribution and retailing massive 
              volume of petroleum products in Nigeria with sizeable fleet of 
              motorized tanker trucks which are strategically positioned for 
              servicing the retail outlets. 
              <br />
              <br />
              We also supply Auto-mobile Gas Oil (AGO) to several establishments 
              within the country on purchase order contracts. Being a company 
              founded on prudency, transparency and sound financial system, we 
              are so much conscious on our turnaround time of service delivery 
              as its helps on our objective of driving business costs, improving 
              funding costs and reducing cost of sales.Fleet Waters Global Resources 
              Limited is affiliated with Helicom Corporation Inc, Japan as a Foreign 
              partner that trades directly with refineries overseas. 
              <br />
              <br />
              In February 2016, Fleetwaters Ice block making, water treatment and 
              production office was established in Palm Avenue, Ladipo Lagos. 
              <br />
              <br />
              January 2017, Fleet Laundry Services a subsidiary of Fleet Waters 
              Global Resources Limited was established to carter for both domestic 
              and Industrial cleaning services.
            </p>
          </div>
          <div className="col-lg-5 started-left">
            <img src={manInFarm} alt="man standing in farm" className='started-image' />
          </div>
        </div>

        <div className="vision-mission d-flex justify-content-around mt-5 mb-5">
          <div className="vm-box mt-5 mb-5 p-4">
            <DiamondOutlinedIcon className='icon' />
            <h3>Our Vision</h3>
            <p>To be a leading energy trading and servicing company that will deliver superior services to its clients</p>
          </div>
          <div className="vm-box mt-5 mb-5 p-4">
            <DiamondOutlinedIcon className='icon' />
            <h3>Our Mission</h3>
            <p>To perpetuate an excellent customer service driven organization, through commitment, loyalty and sound return to our Stakeholders; and socially responsible to the communities where we live and work.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
