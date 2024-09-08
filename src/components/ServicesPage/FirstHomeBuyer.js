import React from 'react';
import './FirstHomeBuyer.css';
import familyImage from '../../images/family.jpg';
import heroImage from '../../images/img-service-section.jpg';

const FirstHomeBuyer = () => {
    return (
        <div className="first-home-buyer-page">

            {/* Hero Section */}
            <h1 className="hero-title ps-5 py-4">First Home Buyer</h1>
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-content">
                    <h1 className="hero-title">First Home Buyer</h1>
                    <div className="scroll-icon">
                        <span className="down-arrow">⌄</span>
                        <span className="down-arrow">⌄</span>
                        <span className="down-arrow">⌄</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Left Side Image */}
                    <div className="col-lg-6">
                        <img src={familyImage} alt="Family First Home" className="img-fluid rounded content-image" />
                    </div>

                    {/* Right Side Text Content */}
                    <div className="col-lg-6">
                        <h2 className="section-title">First Home Buyer At Alpha Financial Solutions</h2>
                        <p className="section-text">
                            At Alpha Financial Solutions, we understand that purchasing your first home is one of the most significant
                            financial decisions you'll ever make. As a first-time homebuyer, navigating the complexities of the real estate
                            market and mortgage options can be overwhelming. That’s why we offer tailored financial solutions and expert
                            guidance to help you make informed decisions and achieve your dream of homeownership.
                        </p>

                        {/* Service Offerings */}
                        <h4 className='fw-bold text-center'>Services Offered To First Home Buyers</h4>
                        <div className="row">
                            {/* First Column */}
                            <div className="col-md-6">
                                <h5>Personalized Mortgage Options:</h5>
                                <p>
                                    We offer a range of mortgage products specifically designed for first-time buyers, including fixed-rate and adjustable-rate mortgages. Our financial advisors work with you to find the best loan that fits your budget and long-term goals.
                                </p>

                                <h5>Down Payment Solutions:</h5>
                                <p>
                                    Struggling with the down payment? Alpha Financial Solutions provides access to various financial strategies to help you secure the funds needed for your down payment, whether through savings plans, grants, or special loan products.
                                </p>

                                <h5>Expert Financial Guidance:</h5>
                                <p>
                                    Our team of experienced financial advisors is here to support you at every step of the home buying process, providing expert advice to help you make the best financial decisions for your future.
                                </p>
                            </div>

                            {/* Second Column */}
                            <div className="col-md-6">
                                <h5>Pre-Approval Assistance:</h5>
                                <p>
                                    Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home.
                                </p>

                                <h5>First-Time Buyer Incentives:</h5>
                                <p>
                                    We help you take advantage of government programs and incentives specifically designed for first home buyers, such as tax credits, reduced-interest loans, and grants that can lower the overall cost of purchasing your home.
                                </p>

                                <h5>Credit Counseling:</h5>
                                <p>
                                    If you're concerned about your credit score, we offer credit counseling services to help you improve your credit and become eligible for better loan options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4 px-5">
                <div className="row align-items-center mortgage-estimate-card">
                    <div className="col-md-8">
                        <h2 className="estimate-title">How To Estimate Mortgage Payments</h2>
                    </div>
                    <div className="col-md-4 text-end">
                        <button className="btn btn-interest-rate">Interest Rate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstHomeBuyer;