import React from 'react';
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
        <FormControlLabel control={<Checkbox defsaultChecked />} label="Wehack" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="HackUTD " />
        <FormControlLabel control={<Checkbox defaultChecked />} label="SWE (Society of Women Engineering) " />
        <FormControlLabel control={<Checkbox defaultChecked />} label= "NSBE (National Society of Black Engineers)" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="WICYS (Women in Cybersecurity)" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="IEEE (Institute of Electrical and Electronics Engineers) " />
        <FormControlLabel control={<Checkbox defaultChecked />} label="GDSC (Google Developer Student Club) " />
        </FormGroup>
        </div>
      </div>
      
    </Box>
    </div>
    );


    
}
