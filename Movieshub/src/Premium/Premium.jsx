import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "../Premium/Premium.css";
import DiamondIcon from '@mui/icons-material/Diamond';

import Navbar from '../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';



const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 220,
  height: 320,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Premium() {
    
    const navigate = useNavigate();
    const handlenext =()=>{
        alert("confirm to proceed")
        navigate("/Payment");  
        
    }
  return (
    <div className='whole0'>
      
      <div className='whole'>
        
    <div className='prem'>
        <div className='go'> 

        <h1>GO PREMIUM <DiamondIcon/></h1><br></br>
       
        </div>
      <Stack direction="row" spacing={5} float>
       
      <DemoPaper onClick={handlenext} className="ee" square={false} >
        <h1 onClick={handlenext}>Rs.49 / Month</h1>
        
        <h4>Ad-free movies</h4>
        <h4>One Phone</h4>
        <h4>One windows</h4><br></br><br></br><br></br><br></br>
        <h4>Enjoy your Premium with your friends and family</h4>
        
        
        
        </DemoPaper>
      <DemoPaper onClick={handlenext} className="ee" square={false}>
      <h1>Rs.99 / Month</h1>
       
        <h4>Ad-free movies</h4>
        <h4>Two Phones</h4>
        <h4>One windows</h4>
        <h4>Share playlists with friends</h4><br></br><br></br><br></br>
        <h4>Enjoy your Premium with your friends and family</h4>
      </DemoPaper>

      <DemoPaper onClick={handlenext} className="ee" square={false} >
      <h1>Rs.499 / Year</h1>
        
        <h4>Ad-free movies</h4>
        <h4>Three Phone</h4>
        <h4>Two windows</h4>
        <h4>Watch Together on different gadgets</h4>
        <h4>Share favorite with friends</h4><br></br>
        <h4>Enjoy your Premium with your friends and family</h4>
      </DemoPaper>

      <DemoPaper onClick={handlenext} className="ee"  square={false}>
      <h1>Rs.699 / Year</h1>
        
        <h4>Ad-free movies</h4>
        <h4>One Phone</h4>
        <h4>One windows</h4>
        <h4>Watch Together on different gadgets</h4>
        <h4>Share favorite with friends</h4>
        <h4>Download movies</h4><br></br>
        <h4>Enjoy your Premium with your friends and family</h4>
      </DemoPaper>
     
    </Stack>
    
    </div>
    </div>
    </div>
  );
}