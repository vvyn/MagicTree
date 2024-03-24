import React from 'react';
import ProfileCard from './ProfileCards';

export const GeneratedMatches = () => {
  return (
    <div className="container mx-auto px-4 py-3 bg-[#CAC2AF] ">
      <div className="py-4 ">
         <ProfileCard
          name="Ava Brown"
          username="avabrown@utdallas.edu"
          bio="Major: Biomedical Engineering"
          classes="Class of 2027"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&usqp=CAU"
        />
      </div>
      <div className="py-4 ">
         <ProfileCard
          name="John Doe"
          username="johndoe@utdallas.edu"
          bio="Major: Computer Science"
          classes="Class of 2025"
          avatar="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRva2zQlrueQiP-_d_vq46yEL52NfCIUklum3AzxNwTQZWHF1c7"
        />
      </div>
      <div className="py-4 ">
         <ProfileCard
          name="Sophia Johnson"
          username="sophiajohnson@utdallas.edu"
          bio="Major: Mechanical Engineering"
          classes="Class of 2025"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&usqp=CAU"
        />
      </div>
      <div className="py-4 ">
         <ProfileCard
          name="Ethan Williams"
          username="ethanwilliams@utdallas.edu"
          bio="Major: Electrical Engineering"
          classes="Class of 2024"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcJKlkD0jgxu_zvB-2QiuD7V3YAq75r9NtA&usqp=CAU"
        />
      </div>
      
    </div>
  );
};

//export default GeneratedMatches;
