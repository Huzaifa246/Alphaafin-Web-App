import React, { useState, useEffect } from 'react';
import { FaHome, FaHandsHelping, FaBuilding, FaChartLine } from 'react-icons/fa';
import OurServicesCard from './OurServicesCard';
import serviceImage from '../../images/family.jpg';
import serviceImage1 from '../../images/family2.jpg';
import HouseImage from '../../images/service-shape.jpg';
import "./OurServices.css"

const OurServices = () => {
    const [currentImage, setCurrentImage] = useState(serviceImage);

    const images = [serviceImage, serviceImage1];
    const [count, setCount] = useState(0); 

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 3000);

        return () => clearInterval(imageInterval);
    }, [images]);
    useEffect(() => {
        if (count < 100) {
            const counterInterval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 30);

            return () => clearInterval(counterInterval);
        }
    }, [count]);
    return (
        <div className="service-card-container py-5">
            <div className='service-img-contain'>
                <img src={HouseImage} alt="HouseImage" />
                <h2 className="text-center mb-4">Our Services</h2>
            </div>
            <div className="row">
                {/* Service Cards */}
                <div className="col-lg-8">
                    <div className="row height-100">
                        <div className="col-md-6">
                            <OurServicesCard
                                icon={<FaHome className="service-icon-style" />}
                                title="Home Loans"
                                description="At Alpha Financial Solutions, we specialize in guiding you through every step of your home loan journey. Whether you’re looking to refinance or invest in property, our expert team is here to provide personalized solutions."
                            />
                        </div>
                        <div className="col-md-6">
                            <OurServicesCard
                                icon={<FaHandsHelping className="service-icon-style" />}
                                title="First Home Buyer"
                                subtitle="Home Loan"
                                description="First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, making homeownership more accessible."
                            />
                        </div>
                        <div className="col-md-6">
                            <OurServicesCard
                                icon={<FaBuilding className="service-icon-style" />}
                                title="Investment Property"
                                description="Our expert team helps guide you through the process of acquiring and managing investment properties, offering the best advice tailored to your financial goals."
                            />
                        </div>
                        <div className="col-md-6">
                            <OurServicesCard
                                icon={<FaChartLine className="service-icon-style" />}
                                title="Refinancing"
                                description="Refinancing can help lower your monthly mortgage payments, reduce your interest rate, or take advantage of cash-out refinancing to achieve your financial goals."
                            />
                        </div>
                    </div>
                </div>

                {/* Image Section*/}
                <div className="col-lg-4 text-center">
                    <div className="image-container">
                        <img src={currentImage} alt="Our Services" className="img-fluid rounded service-image" />
                        <div className="overlay-text">
                            <h3>At Alphaa Financial Solutions, We Offer A Comprehensive Range Of Financial Services</h3>
                            <p>We have the expertise to guide you through the process.</p>
                            <h4>{count}+
                                <h6>Simplify The Loan</h6>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
