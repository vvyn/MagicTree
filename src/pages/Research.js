


import React from 'react';
import { useNavigate } from 'react-router-dom';






export function Research() {
  const navigate = useNavigate();
  return ( 
    <>
      <div className="h-screen w-screen bg-[#CAC2AF] flex justify-center items-center">
        <div>
          <div className="flex text-white justify-center text-4xl lg:text-4xl font-bold">
            Research Opportunities
          </div>

          <div>
           
            

            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://honors.utdallas.edu/research/clark-program/")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
            <div classname = "justify-center mt-2">Clark Summer Research Program</div>
    
              
            </div>
            </div>


            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://honors.utdallas.edu/research/")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
                <div classname = "justify-center mt-2">Hobson Wildenthal Honors College Research</div>
                
                
            </div>
            </div>


            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://honors.utdallas.edu/honors-internships/archer-program/#undergrad")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
                <div classname = "justify-center mt-2">Archer Fellowship Program</div>
                
            </div>
            </div>


            <div className=''>
                    <button className="bg-[#2A4223] hover:bg-[#305127] text-white text-xl font-bold w-full mt-20 py-5 px-4 rounded" onClick={() => navigate('/Career')}>
                     Back
                    </button> 
                </div>
            

        
          </div>
        </div>
      </div>
    </>
  );   
}
