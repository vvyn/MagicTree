import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export function Profile() {

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
      <div className="px-3 justify-center text-center ">
      
      <TextField id="standard-basic" label="First Name"   color="success" variant="standard" />
      <br/>
    
      <TextField id="standard-basic" label="Last Name"  color="success"  variant="standard" />
      
      <br/>
      <br/>
      
      <div className=" px-3 justify-center text-center">
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={majors}
      sx={{ width: 215 }}
      renderInput={(params) => <TextField {...params} label="Major" />}
    />
        </div>
        <div>

        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="ACM (Association of Copmuting Machinery " />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        </div>
      </div>
      
    </Box>
    </div>
    );


    
}

const majors = [
    { label: 'Computer Science'},
    { label: 'Software Engineering'},
    { label: 'Computer Engineering '},
    { label: 'Eectrical Engineering'},
    { label: 'Mechanical Engineering'},
    { label: 'Biomedical Engineering'},
    

];
