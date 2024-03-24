import React from 'react';
import { useNavigate } from 'react-router-dom';



export function Internship() {
  const navigate = useNavigate();
  return ( 
    <>
      <div className="h-screen w-screen bg-[#CAC2AF] flex justify-center items-center">
        <div>
          <div className="mb-20 flex text-white justify-center text-4xl lg:text-4xl font-bold">
            Research Opportunities
          </div>

          <div>
           
            

            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://www.linkedin.com/jobs/search/?keywords=internship&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&currentJobId=3854914022&originToLandingJobPostings=3854914022%2C3774351828%2C3832939027&trackingId=QisVSePyTdC00ZGq%2BGyNJw%3D%3D&refId=7660c0c8-66d7-4d7f-aed3-bf2a2e1412cc")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
            <div classname = "justify-center mt-2">2024 Software Developer Internship</div>
            <br/>
            <div classname = "justify-center mt-2">Company: Schonfeld</div>
            <div classname = "justify-center mt-2">NewYork, NY</div>
    
              
            </div>
            </div>


            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://www.linkedin.com/jobs/search/?currentJobId=3853390394&keywords=internship&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=3854914022%2C3774351828%2C3832939027")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
                <div classname = "justify-center mt-2">Software Engineering Internship 2024</div>
                <br/>
                <div classname = "justify-center mt-2">Company: Uline</div>
                <div classname = "justify-center mt-2">Pleasant Prairie, WI</div>
                
                
            </div>
            </div>


            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://www.linkedin.com/jobs/search/?currentJobId=3695486000&keywords=internship&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=3854914022%2C3774351828%2C3832939027")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
                <div classname = "justify-center mt-2 ">Future IT Leaders Summer 2024 Internship</div>
                <br/>
                <div classname = "justify-center mt-4">Company: Honeywell</div>
                <div classname = "justify-center mt-2">Houston, TX</div>
                
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
