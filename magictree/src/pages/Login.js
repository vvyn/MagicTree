import {signUpWithEmail, loginWithEmail } from "../Firebase.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react';


export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const predefinedPassword = "set_pass"

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
      })
      .catch(error =>{
        console.error(error);
      })
  }
  
  return (
    <>
      <div className=" h-screen w-screen bg-[#CAC2AF]">
        <div>
        <div className="text-center py-2">
            Already Have an Account: Login
        </div>
        <div className="px-4 py-2 justify-center text-center ">
            <input type="email" id="registerEmail" className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div className="py-2">
                <button onClick={handleEmailSignUp} className="bg-[#2A4223] hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded">Sign Up</button>
            </div>
        </div>
       

        <div className="px-4 py-2 justify-center text-center ">
           <input type="email" id="registerEmail" className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
           <div className="py-2">
                <button onClick={handleEmailLogin} className="bg-[#2A4223] hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded">Login</button> 
           </div>
        </div>
       </div>
      </div>
    </>
  );
}


