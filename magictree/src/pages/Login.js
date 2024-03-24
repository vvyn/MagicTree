import {signUpWithEmail, loginWithEmail } from "../Firebase.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const predefinedPassword = "set_pass";
  const [currentImg, setCurrentImg] = useState('./../door1.png');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) => (prevImg === "./../door1.png" ? "p./../door2.png" : "./../door1.png"));
    }, 2000);
        return () => clearInterval(interval);
    }, []);

  function handleEmailSignUp(){
    signUpWithEmail(email, predefinedPassword)
      .then(() => {
        alert("You have successfully been registered");
        document.getElementById('registerEmail').value='';
        console.log("Success!")
      })
      .catch(error =>{
        console.error(error);
      })
  }

  function handleEmailLogin(){
    loginWithEmail(loginEmail, predefinedPassword)
      .then(() => {
        alert("You have successfully logged in");;
        navigate('/Survey1');
      })
      .catch(error =>{
        console.error(error);
      })
  }
  
  return (
    <>
      <div className=" h-screen w-screen bg-[#CAC2AF] justify-center items-center flex flex-col">
      <div class="text-white text-4xl lg:text-4xl pl-5 pr-5 pt-5 font-bold">
        Sorcerer Sprouts
      </div>
        <div className="flex justify-center ">
            <img src={currentImg} alt="Hat" className="w-3/4 h-auto" />
        </div>  

      <div>
          <div className="text-center pt-2 text-xl">
            Have an account?
          </div>
          <div className="px-24 py-2 justify-center text-center ">
              <input type="email" id="registerEmail" style={{ width: 300 }} className="block max-w-full lg:max-w-md rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
              <div className="py-2">
                    <button onClick={handleEmailLogin} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-2 px-4 rounded" style={{ width: 300 }}>Login</button> 
              </div>
          </div>
      
        <div>
            <div className="text-center pt-2 text-xl">
                Don't have an account?
            </div>
            <div className="px-24 py-2 justify-center text-center ">
                <input type="email" id="registerEmail" style={{ width: 300 }} className="block max-w-full lg:max-w-md rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <div className="py-2">
                    <button onClick={handleEmailSignUp} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-2 px-4 rounded">Sign Up</button>
                </div>
            </div>
        </div>
       </div>
      </div>
    </>
  );
}


