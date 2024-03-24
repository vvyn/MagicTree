import { useNavigate } from "react-router-dom";
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
  }

export function Survey4() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className=" h-screen w-screen bg-[#CAC2AF]">
        <div className="text-center py-2">
            Do you prefer having a structured approach to project management and adhering to deadlines or remaining flexible and adaptable to evolving project requirements?
        </div>

        <Slider
        aria-label="Temperature"
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks={[
            { value: 0, label: 'Structured' },
            { value: 10, label: 'Flexible' }
        ]}
        min={0}
        max={10}
        />

        <div className="py-2">
            <button onClick={() => navigate('/Survey5')} className="bg-[#2A4223] hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded">Next</button>
        </div>
      </div>
    </>
  );
}