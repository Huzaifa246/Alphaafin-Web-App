import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import logo from "../images/logo.jpg";
import '../App.css';

const CustomNavbar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [activeLink, setActiveLink] = useState('#home'); // Manage the active link state

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    const getLinkClass = (link) => {
        // Return the class based on whether the link is active or inactive
        return activeLink === link ? 'active-link' : 'inactive-link';
    };

    return (
        <>
            <div className="bg-dark text-light py-4">
                <Container fluid className="gap-x-30 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2 primary-color" /> <span>Sydney, Australia</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaPhone className="me-2 primary-color" /> <span>0468328227</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaClock className="me-2 primary-color" /> <span>Mon - Fri: 9:00am - 5:00pm</span>
                    </div>
                    <span>
                    <FaClock className="me-2 primary-color" />
                        Weekends Appointments Only</span>
                </Container>
            </div>

            <Navbar expand="lg" className="shadow-sm">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#">
                        <img src={logo} alt="Logo" width="150" />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                        {isToggled ? (
                            <GiCancel className="text-dark toggler-icon transition-icon" />
                        ) : (
                            <FaBars className="text-dark toggler-icon transition-icon" />
                        )}
                    </Navbar.Toggle>
                    
                    {/* Collapsible part for links */}
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className={`justify-content-between px-2 ${isToggled ? 'navbar-open' : ''}`}
                    >
                        <Nav style={{ margin: '0 2vw 0 auto' }} className='nav-items-mob'>
                            <Nav.Link 
                                href="#home" 
                                className={`text-uppercase ${getLinkClass('#home')}`} 
                                onClick={() => handleSetActive('#home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                href="#about" 
                                className={`text-uppercase ${getLinkClass('#about')}`} 
                                onClick={() => handleSetActive('#about')}
                            >
                                About Us
                            </Nav.Link>
                            <NavDropdown title="Services" id="services-dropdown" className="text-uppercase">
                                <NavDropdown.Item 
                                    href="#home-loan" 
                                    className={getLinkClass('#home-loan')} 
                                    onClick={() => handleSetActive('#home-loan')}
                                >
                                    Home Loan
                                </NavDropdown.Item>
                                <NavDropdown.Item 
                                    href="#first-home-buyer" 
                                    className={getLinkClass('#first-home-buyer')} 
                                    onClick={() => handleSetActive('#first-home-buyer')}
                                >
                                    First Home Buyer
                                </NavDropdown.Item>
                                <NavDropdown.Item 
                                    href="#personal-loan" 
                                    className={getLinkClass('#personal-loan')} 
                                    onClick={() => handleSetActive('#personal-loan')}
                                >
                                    Personal Loan
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link 
                                href="#faqs" 
                                className={`text-uppercase ${getLinkClass('#faqs')}`} 
                                onClick={() => handleSetActive('#faqs')}
                            >
                                FAQ's
                            </Nav.Link>
                        </Nav>

                        <Nav className="ml-auto nav-call">
                            <Nav.Link href="#call">
                                <button className="btn btn-dark call-btn-nav fw-bold">Call Us Anytime</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
