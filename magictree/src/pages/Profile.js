import React, { useState, useEffect } from 'react';
import TSNE from 'tsne-js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export function Profile() {
    const [outputScaled, setOutputScaled] = useState([]);

  useEffect(() => {
    const model = new TSNE({
      dim: 2,
      perplexity: 30.0,
      earlyExaggeration: 4.0,
      learningRate: 100.0,
      nIter: 1000,
      metric: 'euclidean'
    });

    const inputData = [
        [-5, -2, 5, -3],
        [1, -3, 3, 3],
        [1, 3, 3, -2],
        [2, 5, 1, -3],
        [-5, 2, 2, 4],
        [0, -5, 0, -1],
        [-2, 5, 5, 0],
        [-4, -2, 0, 0],
        [-2, -3, 4, 2],
        [-3, 2, -2, 1],
        [-5, 2, 0, 1],
        [5, 5, -4, 2],
        [-4, -1, -3, -2],
        [2, 4, 4, -1],
        [-4, -4, 5, 5],
        [0, -1, 3, 5],
        [3, 1, -3, -3],
        [1, 3, 2, 2],
        [4, 3, 2, -2],
        [-5, 5, 3, -4],
        [-2, -3, 2, -1],
        [-4, 2, -1, -2],
        [0, 5, 5, 5],
        [2, 3, -4, 5],
        [0, -1, 2, 4],
        [2, 2, -1, -1],
        [-4, -1, 3, -3],
        [0, 2, 4, 1],
        [-4, -2, 3, 3],
        [-1, 3, -1, -3],
        [3, -2, 1, -2],
        [4, -4, -2, 3],
        [-1, -3, -4, -3],
        [-4, 3, -5, 3],
        [2, 5, -5, -3],
        [-5, -2, -2, 0],
        [5, 1, 4, -5],
        [-5, -4, 4, -5],
        [-3, -1, -4, -4],
        [2, -1, 4, -1],
        [3, -5, 3, 0],
        [1, 3, -2, 4],
        [-2, -1, 2, -2],
        [3, 2, -2, 1],
        [0, -5, -4, -1],
        [3, 0, -4, 5],
        [2, -1, 2, -1],
        [0, 2, 5, -1],
        [-4, 4, 0, -3],
        [1, 1, 4, 4],

    ];

    model.init({
      data: inputData,
      type: 'dense'
    });

    model.run();
    const output = model.getOutputScaled();

    setOutputScaled(output);
  }, []);

  const colors = ['red', 'green', 'blue', 'yellow'];

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
