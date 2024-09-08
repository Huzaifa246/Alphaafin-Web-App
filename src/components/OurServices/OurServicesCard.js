import React from 'react';
import './ServiceCard.css';

const OurServicesCard = ({ icon, title, description, subtitle }) => {
    return (
        <div className="service-card p-4 pb-5" style={{height: "97%"}}>
            <div className="service-icon mb-3 d-flex">
                {icon}
                <div className='m-auto'>
                    {subtitle && <h6 className="text-muted px-2">{subtitle}</h6>}
                    <h5 className="text-dark px-2">{title}</h5>
                </div>
            </div>
            <hr />
            <p className='letter-space'>{description}</p>
        </div>
    );
};

export default OurServicesCard;
