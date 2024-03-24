import {signUpWithEmail, loginWithEmail } from "../../Firebase.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
  }

export function Survey1() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className=" h-screen w-screen bg-[#CAC2AF]">
        <div className="text-center py-2">
            Hi
        </div>

        <Slider
        aria-label="Temperature"
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={0}
        max={10}
        />

        <div className="py-2">
            <button onClick={() => navigate('/Next')} className="bg-[#2A4223] hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded">Next</button>
        </div>
      </div>
    </>
  );
}