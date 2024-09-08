import React from 'react';
import './BrightSection.css'; // Create a custom CSS file for styling
import FamilyBrightImage from '../../images/fam-bright-section.jpg'; // Image of the family
import HouseIcon from '../../images/house-roof.jpg'; // Example house icon, adjust accordingly

const BrightSection = () => {
    return (
        <div className="bright-section container-fluid">
            <div className="row align-items-center mob-margin">
                {/* Left Section: Icon and Text */}
                <div className="col-lg-5 text-light left-section">
                    <div className="icon-text-container">
                        <img src={HouseIcon} alt="House Icon" className="house-icon mb-3"/>
                        <h1 className="mb-4">We Believe You're Bright</h1>
                    </div>
                </div>

                {/* Right Section: Family Image and Cards */}
                <div className="col-lg-7 position-relative">
                    <img src={FamilyBrightImage} alt="Family" className="img-fluid rounded family-image" />
                    <div className="d-flex justify-content-around">
                        <div className='info-cards-container-1'>
                            <div className="info-card-bright">
                                <h2>320+</h2>
                                <p>Lenders</p>
                            </div>
                        </div>
                        <div className='info-cards-container'>
                            <div className="info-card-bright">
                                <h2>20+</h2>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrightSection;