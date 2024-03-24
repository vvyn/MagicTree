import React from 'react';
import { useNavigate } from "react-router-dom";

export const Transition = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#CAC2AF] ">
        <div className='py-24 px-5'>
            <div className="text-center text-2xl">
                Sarah Johnson
            </div>
            <div className="text-center text-xl">
                Diplomat
            </div>
            <div className='py-5'>
                <button className="bg-[#2A4223] hover:bg-[#305127] text-white text-xl font-bold w-full py-5 px-4 rounded" onClick={() => navigate('/GenMatches')}>
                    View Profile Matches
                </button>
                <div className='py-5'>
                    <button className="bg-[#2A4223] hover:bg-[#305127] text-white text-xl font-bold w-full py-5 px-4 rounded" onClick={() => navigate('/PeoplePersonalities')}>
                        Comet Solar System
                    </button> 
                </div>
                <div className=''>
                    <button className="bg-[#2A4223] hover:bg-[#305127] text-white text-xl font-bold w-full py-5 px-4 rounded" onClick={() => navigate('/Career')}>
                     Career Development
                    </button> 
                </div>

                <div className=''>
                    <button className="bg-[#2A4223] hover:bg-[#305127] text-white text-xl font-bold w-full mt-52 py-5 px-4 rounded" onClick={() => navigate('/Hat')}>
                     Back
                    </button> 
                </div>
               
            </div>
        </div>
    </div>
  );
};

//export default ProfileCard;
