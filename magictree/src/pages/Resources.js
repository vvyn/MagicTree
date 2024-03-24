


import React from 'react';
import { useNavigate } from 'react-router-dom';






export function Resources() {
  const navigate = useNavigate();
  return ( 
    <>
      <div className="h-screen w-screen bg-[#CAC2AF] flex justify-center items-center">
        <div>
          <div className="flex text-white justify-center text-4xl lg:text-4xl font-bold">
            Your Top Courses
          </div>

          <div>
           
            

            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://www.linkedin.com/learning/docker-for-developers-14493163/docker-for-developers?u=70198226")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
            <div classname = "justify-center mt-2">Linkedin Learning</div>
                <img src={`${process.env.PUBLIC_URL}/Docker.png`} alt="Docker for Developers" className="mr-2" />
                <div className="text-white mt-2"><a href="https://www.linkedin.com/learning/docker-for-developers-14493163/docker-for-developers?u=70198226" className="text-white-300 mt-2">Docker for Developers</a></div>
            </div>
            </div>


            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://www.coursera.org/specializations/python?utm_medium=sem&utm_source=gg&utm_campaign=B2C_NAMER_python_umich_FTCOF_specializations_country-US-country-CA&campaignid=300366907&adgroupid=34186056677&device=c&keyword=coursera%20python%20course&matchtype=b&network=g&devicemodel=&adposition=&creativeid=654825796501&hide_mobile_promo&gad_source=1&gclid=CjwKCAjwnv-vBhBdEiwABCYQA5Tz5u5kRVW3GOoBBAlZBMR5c2QClxlASVgH1_I9KjOZqkGI76srxRoCXNUQAvD_BwE")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
                <div classname = "justify-center mt-2">Coursera</div>
                <img src={`${process.env.PUBLIC_URL}/Python.png`} alt="Docker for Developers" className="mr-2" />
                <div className="text-white mt-2"><a  className="text-white-300 mt-2">Python for Everybody</a></div>
            </div>
            </div>


            <div className="py-5 px-24 flex flex-col items-center">
            <div onClick={() => window.open("https://cloudacademy.com/learning-paths/aws-fundamentals-1/?utm_feeditemid=&utm_device=c&utm_term=&utm_campaign=%5BSearch%5D+DSA+-+All+Website+-+USA&utm_source=google&utm_medium=ppc&hsa_acc=5890858304&hsa_cam=12050150150&hsa_grp=113490448702&hsa_ad=687774090942&hsa_src=g&hsa_tgt=dsa-898576037425&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwnv-vBhBdEiwABCYQA_f9r5o-AJ9IgxvMRHU9TdTlz-VdJQZRysimxSIHX1rxEYlnlEcJahoC0iAQAvD_BwE")} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded justify-center items-center cursor-pointer">
                <div classname = "justify-center mt-2">Cloud Academy</div>
                <img src={`${process.env.PUBLIC_URL}/aws.png`} alt="Docker for Developers" className="mr-2" />
                <div className="text-white mt-2"><a  className="text-white-300 mt-2">Fundamentals of AWS</a></div>
            </div>
            </div>


            
            

        
          </div>
        </div>
      </div>
    </>
  );   
}
