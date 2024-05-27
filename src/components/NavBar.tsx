import { NavLink } from "react-router-dom";
import logo from '../assets/images/fleetfarmslogo.svg'
import arrow from '../assets/images/arrow-right.svg'
import '../assets/styles/navbar.scss'
import instagram from '../assets/images/basil_instagram-outline..svg'
import facebook from '../assets/images/flowbite_facebook-solid..svg'
import dropdown from '../assets/images/Vectordown.svg'
import Hamburger from 'hamburger-react'
import { Fragment, useState } from "react";

function NavBar() {

    const [isOpen, setOpen] = useState(false)

    const toggleIsOpen = ():void => {
        setOpen(!isOpen)
    }

    return (
        <Fragment>
            <nav>
                <div className="top">
                    <div className="container d-flex justify-content-end align-items-center">
                        <a href="tel:+2348024316781" className="me-2">+234 802 431 6781</a>
                        <img src={arrow} alt="arrow" />
                        <a href="mailto:info@fleetwatersfarms.com" className="ms-2 me-2">info@fleetwatersfarms.com</a>
                        <img src={arrow} alt="arrow" />
                        <a href="#" target="_blank" rel="noopener noreferrer" className="ms-2 social">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="ms-2 social">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </div>
                </div>
                <div className="container nav d-flex align-items-center justify-content-between">
                    <NavLink to='/' className='d-flex logo align-items-center nav-link'>
                        <img src={logo} alt="logo" />
                        <p className="mb-0 logo-name">Fleetwater Farms</p>
                    </NavLink>

                    <div className="mid-links d-flex align-items-center">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/About' className='nav-link'>About Us</NavLink>
                        <NavLink to='#' className='nav-link d-flex dropdown'>Products
                            <img src={dropdown} alt="dropdown arrow" className="ms-2" />

                            <div className="dropdown-links">
                                <NavLink to='/products/livestock' className='dropdown-link'>Livestock</NavLink>
                                <NavLink to='/products/crops' className='dropdown-link'>Crops</NavLink>
                                <NavLink to='/products/poultry' className='dropdown-link'>Poultry</NavLink>
                                <NavLink to='/products/fishes' className='dropdown-link'>Fishes</NavLink>
                            </div>
                        </NavLink>
                        <NavLink to='/Contact' className='nav-link'>Contact</NavLink>
                    </div>

                    <div className="right-links">
                        <input type="text" placeholder="Search" />
                    </div>

                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>

            {
                isOpen && (
                    <div className="backdrop mobile">
                        <aside>
                            <NavLink onClick={toggleIsOpen} to='/' className='nav-link'>Home</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/About' className='nav-link'>About Us</NavLink>
                            <NavLink to='#' className='nav-link d-flex dropdown'>Products
                                <img src={dropdown} alt="dropdown arrow" className="ms-2" />

                                <div onClick={toggleIsOpen} className="dropdown-links">
                                    <NavLink to='/products/livestock' className='dropdown-link'>Livestock</NavLink>
                                    <NavLink to='/products/crops' className='dropdown-link'>Crops</NavLink>
                                    <NavLink to='/products/poultry' className='dropdown-link'>Poultry</NavLink>
                                    <NavLink to='/products/fishes' className='dropdown-link'>Fishes</NavLink>
                                </div>
                            </NavLink>
                            <NavLink onClick={toggleIsOpen} to='/Contact' className='nav-link'>Contact</NavLink>
                        </aside>
                    </div>
                )
            }
        </Fragment>
    )
}

export default NavBar;