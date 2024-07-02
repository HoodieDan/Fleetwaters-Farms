import '../assets/styles/about-page.scss';
import manInFarm from '../assets/images/man-in-farm.png';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import integrity from '../assets/images/integrity.svg';
import teamwork from '../assets/images/teamwork.svg';
import respect from '../assets/images/respect.svg';
import excellence from '../assets/images/excellence.svg';
import safety from '../assets/images/safety.svg';
import csr from '../assets/images/csr.png';
import csrBadge from '../assets/images/csr-badge.png';
import methodImage from '../assets/images/method-img.png';

export default function AboutPage() {
  return (
    <div className='about-page'>
      <div className="about-page-header header">
          <div className="container">
              <h2 className='mb-3 reveal-header'>About Us</h2>
              <p className='reveal-text'>We offer quality livestock products available for pickup or delivery.</p>
          </div>
      </div>

      <div className="contain">

        <section className="container">
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
        </section>

        <section className="container">
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
        </section>

        <section className="values text-center mb-5 mt-5">
          <h2>Our Values</h2>
          <h6 className='green mb-3'>COMPANY VALUES</h6>

          <div className="values-bg p-lg-5 pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 p-3 column">
                  <div className="value-card p-4">
                    <img src={integrity} alt="integrity" className='value-svg' />
                    <h5 className='mb-3 mt-3'>Integrity</h5>
                    <p>Being trustworthy, honest and fair as we value open relationships and communication based on transparency and mutual benefit with our customers and society in general</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3 column">
                  <div className="value-card p-4">
                    <img src={teamwork} alt="integrity" className='value-svg' />
                    <h5 className='mb-3 mt-3'>Teamwork</h5>
                    <p>Achieving efficiency and effectiveness by working together through communication, collaboration and knowledge sharing.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3 column">
                  <div className="value-card p-4">
                    <img src={respect} alt="integrity" className='value-svg' />
                    <h5 className='mb-3 mt-3'>Respect</h5>
                    <p>Giving due regard to each other, customers, suppliers and other external stakeholders, in all situations</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3 column">
                  <div className="value-card p-4">
                    <img src={excellence} alt="integrity" className='value-svg' />
                    <h5 className='mb-3 mt-3'>Excellence</h5>
                    <p>Distinguishing ourselves through innovation, accountability, discipline and commitment.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3 column">
                  <div className="value-card p-4">
                    <img src={safety} alt="integrity" className='value-svg' />
                    <h5 className='mb-3 mt-3'>Safety</h5>
                    <p>Our first priority in a work place is ensuring adherence to regulations and procedures intended to prevent accident, injury and environmental degradation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="csr container">
          <div className="text-center mb-3">
            <h2>Our CSR</h2>
            <h6 className='green'>CORPORATE SOCIAL RESPONSIBILITY</h6>
          </div>

          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-6 pe-lg-5 d-flex align-items-center">
              <p>Fleetwaters believes that with its own growth and success, the community 
                within which it operates should simultaneously benefit. We participate in 
                several community development projects independently or  in partnership 
                with non-profit organisations on a continuous basis investing in community 
                centers, Enterprise and Entrepreneurial Skills Development programmes, 
                Education and welfare for orphans and the underprivileged persons, youth 
                development programs and disaster relief projects wherever a crisis may exist.
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img src={csr} alt="image of volunteers" className='img-fluid mb-5' />
              <img src={csrBadge} alt="csr badge" className='csr-badge' />
            </div>
          </div>
        </section>

        <section className="method container mb-5">
          <div className="text-center mb-3">
            <h2>Our Method</h2>
            <h6 className='green'>HEALTH SAFETY AND ENVIRONMENT</h6>
          </div>

          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src={methodImage} alt="image of farmer" className='img-fluid' />       
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <ul>
                <li>
                  We ask to prevent accidental injuries of employees and third parties, 
                  material damage, and damage the environment as much as possible.
                </li>
                <li>
                  We continually work at improving working condition and environmental
                  protection while carry out operations in a socially responsible and ethical manner
                </li>
                <li>
                  The supply and removal of waste materials that are detrimental
                  to the environment are properly carried out.
                </li>
                <li>
                  Ensure that adequate contingency plans are in place to mitigate
                  the effect of safety incidents and emergencies.
                </li>
                <li>
                  Give adequate attention to driving back safety risks over the hazards.
                </li>
                <li>
                  To minimize the number of absence of days caused by industrial accident
                  and poor working conditions and to take care of all employees taken ill.
                </li>
                <li>
                  Safety starts with each of us, every employee both in our employ or acting 
                  as sub contractor is responsible for the safe and solid execution of his 
                  task, adhering to our safety policy guidelines. This, the management will 
                  promote strictly, through training, information and providing the appropriate 
                  resources and this policy will be reviewed periodically and modified, if 
                  deemed fit, to meet new challenges.
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
