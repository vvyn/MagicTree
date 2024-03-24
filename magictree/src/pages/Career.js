import { useNavigate } from "react-router-dom";

export function Career() {
    const navigate = useNavigate();
    return ( 
        <>
        <div className=" h-screen w-screen bg-[#CAC2AF] flex justify-center items-center">
        
        <div>
            <div className="flex text-white justify-center text-4xl lg:text-4xl font-bold">
                Career Development
            </div>

            <div>
                <div className="py-5 px-24">
                    <button onClick={() => navigate('/Internship')} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded ">Internships / Co-ops</button>
                </div>
                <div className="py-5 px-24">
                    <button onClick={() => navigate('/Resources')} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded ">Top Resources</button>
                </div>
                <div className="py-5 px-24">
                    <button onClick={() => navigate('/Research')} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-3 px-6 rounded ">Research Opportunities</button>
                </div>
            </div>
        </div>

        </div>
        </>
    );   
}
