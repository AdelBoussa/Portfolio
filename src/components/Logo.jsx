import myLogo from "../assets/logo.svg";
import React from 'react';
import '../styles/Logo.css';
const Logo = () => {
  return (
    <div>
      <div class="logo-container">
        <img
          src={myLogo}
          alt="Logo"
          className="logo"
          autoPlay={true}
        />
        
        
      </div>
    </div>
  );
};

export default Logo;