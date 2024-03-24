import { useNavigate } from "react-router-dom";
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
  }

export function Survey5() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className=" h-screen w-screen bg-[#CAC2AF]">
        <div className="text-center py-2">
            When faced with a technical challenge, do you rely on empirical evidence and systematic problem-solving techniques or explore creative solutions and unconventional approaches?
        </div>

        <Slider
        aria-label="Temperature"
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks={[
            { value: 0, label: 'Empirical' },
            { value: 10, label: 'Creative' }
        ]}
        min={0}
        max={10}
        />

        <div className="py-2">
            <button onClick={() => navigate('/Survey6')} className="bg-[#2A4223] hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded">Next</button>
        </div>
      </div>
    </>
  );
}