import React from 'react';

import facebook from '../assets/socials/facebook.png'

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | Chamith Dilshan</p>
        <p className="hidden sm:block">Fullstack Developer</p>
      </div>
      
      {/* social media */}
      {/* <div className="flex mb-5 justify-center md:justify-start">
        <a href="www.linkedin.com/in/chamith-dilshan-b95034280"
        target="_blank"
        rel="noreferrer" //useful for privacy reasons
        >
          <img src={facebook} alt="" />
        </a>


      <a className="ml-4"
       href="https://github.com/ChamithDilshanTharuka"
        target="_blank"
        rel="noreferrer" //useful for privacy reasons
        >
          <img src={facebook} alt="" />
        </a>
    </div> */}
    </div>
  );
};

export default Footer;