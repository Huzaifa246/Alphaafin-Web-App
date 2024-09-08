import React from 'react';
import InfoCard from '../InfoCards/InfoCard';
import "./home.css";

const Home = () => {
  return (
    <div className="px-4 py-5 bg-blue Border-Info">
      <div className="row">
        <div className="col-md-6 mb-4">
          <InfoCard 
            title="Our Story" 
            text="Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way."
            linkText="KNOW MORE" 
          />
        </div>
        <div className="col-md-6 mb-4">
          <InfoCard 
            title="Our Mission" 
            text="At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
