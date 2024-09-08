import React from 'react';
import founderImage from '../../images/founder.jpg';
import contactImage from '../../images/contact-image.jpg';
import { FaCalendarAlt ,FaMapMarkerAlt, FaPhone, FaClock, FaTwitter, FaWordpress, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './founderSection.css';

const FounderSection = () => {
  return (
    <div className="founder-section py-5">
      <div className="container text-center">
        {/* Founder Information */}
        <h1 className="pb-3 fw-bold">Meet Our Founder</h1>
        <div className='m-auto card-founder'>
          <img src={founderImage} alt="Founder" className="founder-image mb-3 rounded-lg" />
          <h4>Mr. Pawan Punjabi</h4>
          <p>Founder</p>
        </div>
        {/* Contact Us Section */}
        <div className="row pt-5">
          <div className="col-md-6 text-start">
            <h2>Contact Us</h2>
            <p>Please feel free to ask if you have any further questions.</p>
            
            <p><FaMapMarkerAlt className="icon" /> <b>Sydney, Australia</b></p>
            <p><FaPhone className="icon" /> <b>0468328227</b></p>
            <p><FaClock className="icon" /> <b>Mon - Fri: 9:00am - 5:00pm</b></p>
            <p><FaCalendarAlt className="icon" /> <b>Weekend Appointments Only</b></p>

            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaWordpress /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img src={contactImage} alt="Contact Us" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
