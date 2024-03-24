import React, { useState, useEffect } from 'react';
import TSNE from 'tsne-js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export function Profile() {

  const majors = [
    { label: 'Computer Science'},
    { label: 'Software Engineering'},
    { label: 'Computer Engineering '},
    { label: 'Eectrical Engineering'},
    { label: 'Mechanical Engineering'},
    { label: 'Biomedical Engineering'},
    

];
    return ( 
        <div className=" h-screen w-screen bg-[#CAC2AF]">
            <div className='text-center text-3xl py-8'>Profile</div>
            <svg width="400" height="400">
            {outputScaled.map((point, index) => (
                <circle
                key={index}
                cx={point[0] * 200 + 200}
                cy={point[1] * 200 + 200}
                r="3"
                fill={colors[index % colors.length]}
                />
            ))}
            </svg>
        
        <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '29ch' },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'bg-[#2A4223]', // Custom color for the underline
          },
        
      }}
      noValidate
      autoComplete="off"
    >
      <div class="text-white text-lg text-6xl lg:text-6xl pl-5 pt-5 pb-5 font-bold">
        Your Profile
      </div>

      <div className="px-3 flex-row pt-3 pl-10 items-center justify-center v-screen">
          
          <TextField id="standard-basic" label="First Name"   color="success" variant="standard" sx={{ width: 350 }}/>
          <br/>   
      </div>

      <div className="px-3 flex-row pt-3 pl-10 items-center justify-center v-screen">
          <TextField id="standard-basic" label="Last Name"  color="success"  variant="standard" sx={{ width: 350 }}/>
          
          <br/>
          <br/>
      </div>
      <div className=" px-3 pt-6 pl-10 justify-center text-center">
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={majors}
      sx={{ width: 350 }}
      renderInput={(params) => <TextField {...params} label="Major" />}
    />
        <div className=" px-3 pt-6 justify-center text-center">

        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="ACM (Association of Copmuting Machinery) " />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        </div>
      </div>
      
    </Box>
    </div>
    );


    
}
