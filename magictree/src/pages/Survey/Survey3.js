import { useNavigate } from "react-router-dom";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';


function valuetext(value) {
    return `${value}°C`;
  }

export function Survey3() {
  const navigate = useNavigate();
  
  return (
    <div className="py-20 h-screen w-screen bg-[#CAC2AF]">
    <div className=" ">
      <div className="text-3xl text-center py-2 px-3">
      When troubleshooting a complex problem, do you prioritize logical analysis and data-driven decisions? OR
      </div>
      <div className="px-48 py-12">
        <Box sx={{ height: 300 }}>
          <Slider
             orientation="vertical"
             defaultValue={3} // Set default value to 3
             min={1} // Minimum value of the slider
             max={10} // Maximum value of the slider
             step={1} // Step size
             marks 
             aria-label="Temperature"
             valueLabelDisplay="auto"
          />
        </Box>
      </div>
      <div className="text-3xl text-center py-2 px-3">
        Do you consider the impact on end-users and stakeholders' feedback?
      </div>

     
      <div className="py-5 px-24">
          <button onClick={() => navigate('/Survey4')} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-2 px-4 rounded ">Next</button>
      </div>
    </div>
  </div>
  );
}