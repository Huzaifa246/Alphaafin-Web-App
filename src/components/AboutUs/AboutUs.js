import React, { useState, useEffect} from 'react';
import './AboutUs.css';  // Add custom CSS here for styling
import FamilyImage from '../../images/familyabout.jpg';
import FamilyImage1 from '../../images/family.jpg';
import ExpertiseImage from '../../images/family2.jpg';

const AboutUs = () => {
    const [currentImage, setCurrentImage] = useState(FamilyImage1);

    const images = [FamilyImage1, ExpertiseImage];

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
    return (
        <>
            <div className="about-us-container">
                <h1 className="my-3 ps-5 fw-bold">About Us</h1>
                {/* First Section */}
                <div className="about-us-first-section container py-5">
                    <h2 className="text-center">We Believe You're Bright</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={FamilyImage} alt="Family" className="about-image" />
                        </div>
                        <div className="col-md-6">
                            <h4>Welcome To Alphaa Financial Solutions</h4>
                            <p>
                                At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services.
                                Established with a vision to provide seamless loan processing and financial advisory, we have grown to become
                                a trusted name in the Australian mortgage industry.
                            </p>
                            <h4>Our Story 😊</h4>
                            <p>
                                Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing.
                                Our founder, Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise
                                go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home,
                                thanks to our unwavering commitment to excellence and innovation.
                            </p>
                        </div>
                        <div  className="col-md-6">
                        <h4>Our Mission</h4>
                            <p>
                            Our mission is to provide our clients with tailored financial solutions that cater to their unique needs.
                            We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="about-us-second-section container-fluid py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={currentImage} alt="Family Expertise" className="img-fluid rounded about-image" />
                        </div>
                        <div className="col-md-6 text-light expertise-section">
                            <h5 className="text-warning">Why Choose Us</h5>
                            <h2>Our Expertise</h2>
                            <p>
                                Expertise and Experience: With over 20 years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.
                            </p>
                            <p>
                                Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.
                            </p>
                            <p>
                                Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.
                            </p>
                            <p>
                                Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;