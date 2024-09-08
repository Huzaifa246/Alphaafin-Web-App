import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import FirstHomeBuyer from './components/ServicesPage/FirstHomeBuyer';

const PageNotFound = () => {
  return (
    <div className="text-center py-5">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or may have been moved.</p>
    </div>
  );
};
function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/first-home-buyer" element={<FirstHomeBuyer />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
