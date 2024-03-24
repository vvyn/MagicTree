import React from 'react';
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ name, username, bio, classes, avatar }) => {
  const navigate = useNavigate();


  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-32 sm:h-24 w-32 rounded-full"
          src={avatar}
          alt={name}
          onClick={ () =>{
            if (name==="John Doe") {
              navigate('/ProfileMatch1');
            } else {
              navigate('/ProfileMatch')
            }}}
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-gray-600">@{username}</p>
          <p className="text-gray-700 mt-2">{bio}</p>
          <p className="text-gray-700 mt-2">{classes}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
