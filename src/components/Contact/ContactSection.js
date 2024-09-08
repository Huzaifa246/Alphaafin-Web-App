import React from 'react';
import "./contactSection.css"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ImgIcon from "../../images/img-icon-2.jpg"
const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-bg-image py-5 text-center text-light">
        <div className='blue-color-btn'>
          <img src={ImgIcon} alt="ImgIcon" 
           className='imgIcon2'
           />
          <h2>Talk To PAWAN Now!</h2>
          <button className="btn btn-light mt-3 p-4"><b>CONTACT US</b></button>
          <p className="mt-3" style={{fontSize: "1.3rem"}}>Feel Free to Get in Touch for a No Obligations <b>Call PAWAN !!!</b></p>
        </div>
      </div>

      <div className="pb-5 bg-contact">
        <div className="row py-4 mx-0">
          <div className="col-md-6 pt-2 mb-4">
            <div className="quick-contact p-4 text-light rounded">
              <h5 className="text-color">Quick Contact</h5>
              <p>At Alpha Financial Solutions, we believe in empowering your property dreams with our premium financial services.</p>
              <p><FaMapMarkerAlt className="icon" /> <b>Sydney, Australia </b></p>
              <p><FaPhone className="icon" /><b>+923343733522</b></p>
              <p><FaEnvelope className="icon" /> <b>info@alphafin.com.au</b></p>
            </div>
          </div>

          <div className="col-md-6 mb-4 py-4">
            <div className="opening-hours bg-dark text-light rounded-5">
              <h5 className="text-color">Opening Hours</h5>
              <div className="hours-line">
                <span>Mon to Fri</span>
                <span className="dots"></span>
                <span>9:00am | 5:00pm</span>
              </div>
              <div className="hours-line">
                <span>Sat to Sun</span>
                <span className="dots"></span>
                <span>Appointments Only</span>
              </div>
              <button className="btn btn-warning btn-block mt-3">SCHEDULE A VISIT</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactSection;
