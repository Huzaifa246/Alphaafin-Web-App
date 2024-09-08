import React from 'react';
import { FaTwitter, FaWordpress, FaWhatsapp, FaTelegram, FaGitlab } from 'react-icons/fa';
import './footer.css';
import ContactSection from './../Contact/ContactSection';

const Footer = () => {
  return (
    <>
      <ContactSection />
      <footer className="footer bg-dark text-light py-3">
        <div className="d-flex justify-content-between align-items-center px-4">
          <div className="social-icons">
            <a href="#"><FaGitlab /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaWordpress /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

          <div className="footer-text">
            <span>2024 © All Rights Reserved | Developed with <span className="text-danger">❤</span> by <span className="text-warning">Psyber Inc</span></span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;