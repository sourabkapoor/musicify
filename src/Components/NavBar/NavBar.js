import React from 'react';
import './NavBar.css';
import icon from './icon.png';
import globe from './globe.png';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function ButtonAppBar() {
  return (
    <AppBar>
    <div className='flex justify-between bg-near-black'>
      <div className='w-30'>
        <img src={icon} alt='logo' className='mr7 mt3' height='45' width='auto'/>
      </div>
      <div className='w-40 '>
        <Typography variant="h5">
            <p className='type white'>Musicify</p>
          </Typography>
      </div>
      <div className='w-30'>
        <img src={globe} alt='web' className='mt3 right-1 left-0' height='45' width='auto'/>
        <Button variant="contained" className='bottom-1 left-1'>Contact Us</Button>
        <Button variant="contained" className='bottom-1 left-2'>Login</Button>
      </div>
    </div>
    </AppBar>
  );
}
