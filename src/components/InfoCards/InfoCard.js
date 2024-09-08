import React from 'react';
import "./infoCard.css";

const InfoCard = ({ title, text, linkText }) => {
  return (
    <div className="info-card p-5 shadow rounded-4 bg-white h-100 bd-bottom-orange">
      <h3>{title}</h3>
      <p className='lh-lg'>{text}</p>
      <a href="#" className="fw-bold">{linkText}</a>
    </div>
  );
};

export default InfoCard;
