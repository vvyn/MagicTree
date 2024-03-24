
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import {
    Typography,
    Grid,
    TableContainer,
    useMediaQuery,
    useTheme,
} from "@mui/material";

export const ProfileMatch1 = () => {
  const radarChartRef = useRef(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showRadarChart, setShowRadarChart] = useState(true);
  
  useEffect(() => {
    Chart.defaults.font.size = 14;

    const createRadarChart = () => {
      if (radarChartRef.current) {
        const radarCtx = radarChartRef.current.getContext("2d");
        return new Chart(radarCtx, {
          type: "radar",
          data: {
            labels: [
                  'Extrovert',
                    'Thinking',
                    'Judgers',
                    'Sensors',
                    'Introvert',
                    'Feeling',
                    'Perceivers',
                    'Intuitives'
            ],
            datasets: [
              {
                     label: 'Your Profile Match',
                    data: [4,7,2,7, 6, 3, 8 , 3],
                    fill: true,
                    backgroundColor: 'rgba(47, 59, 45, 0.2)',
                    borderColor: 'rgb(47, 59, 45)',
                    pointBackgroundColor: 'rgb(47, 59, 45)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(47, 59, 45)'
              },
              {
                    label: 'John Doe Profile Match',
                    data: [9,2,4,5,1,8,6,5],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
              },
            ],
          }, 
          options: {
            scales: {
              r: {
                beginAtZero: true,
                pointLabels: {
                  font: {
                    size: 14,
                  },
                },
              },
            },
            elements: {
              line: {
                borderWidth: 8,
              },
            },
          }, 
        }); 
      }
    };//

 
    let radarChart;
   
    if (showRadarChart) {
      radarChart = createRadarChart();
    }

   
    return () => {
      if (radarChart) radarChart.destroy();
     
    };
  }, [showRadarChart]); 
  

  

  return (
    <div className=" h-screen w-screen bg-[#CAC2AF] " >
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
       
          <Typography variant="h6" gutterBottom>
          
          </Typography>
          
          {showRadarChart ? (
            <div
              style={{
                height: isMobile ? "400px" : "500px",
                width: "100%",
                display: "flex" , 
                alignItems: "center"
              }}
            >
              <canvas ref={radarChartRef} />
            </div>
          ) : (
            <TableContainer>
              
            </TableContainer>
          )}
        
      </Grid>

   
    </Grid>
</div>
  );
};
