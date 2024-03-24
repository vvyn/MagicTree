import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const images = {
  hat1: './../hat1.png',
  hat2: './../hat2.png',
  home: './../home.png'
};

export function Hat() {
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState(images.hat1);
  const [ctr, setCtr] = useState(0);

  useEffect(() => {
    if (ctr < 6) {
      const timer = setTimeout(() => {
        setCurrentImg(currentImg === images.hat1 ? images.hat2 : images.hat1);
        setCtr(ctr + 1);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setCurrentImg(images.home);
    }
  }, [currentImg, ctr]);
  
  return (
    <>
      <div className=" h-screen w-screen bg-[#CAC2AF] flex justify-center items-center">
        <div className={`transition-transform ease-in-out duration-500 ${ctr < 6 ? 'animate-flip' : ''}`}>
          <img src={currentImg} alt="Hat or Home Page" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
}