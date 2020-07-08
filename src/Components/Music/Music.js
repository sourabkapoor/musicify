import React from 'react';
import './Music.css';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className='flex mt6'>
        <div className='center CardStyle ma3 vh-75 w-30'>
          <div className='center Thumb ma1 h4 w4 mt4'>
          </div>
          <h4 className='white'>Track Title Here</h4>
          <p className='white'>Artist Name</p>
          <br/>
          <div><hr width='60%'/></div>
          <br/>
          
          <div className='justify-around'>
            <span className='flex-start ma4'>
              <AddIcon fontSize='large'/>
            </span>
            <span className='flex-start ma3'>
              <SkipPreviousIcon fontSize='large'/>
            </span>
            <span className='center ma3'>
              <PlayArrowIcon fontSize='large'/>
            </span>
            <span className='flex-end ma3'>
              <SkipNextIcon fontSize='large'/>
            </span>
            <span className='flex-end ma4'>
              <GetAppIcon fontSize='large'/>
            </span>
          </div>
          <br/>
          
          <div className='flex'>
            <div className='flex-start w-25'>
              <VolumeMuteIcon />
            </div>
            <div className='w-50 center'>
              <Slider aria-labelledby="input-slider"/>
            </div>
            <div className='flex-start w-25'>
              <VolumeUp />
            </div>
          </div>
          

        </div>
      </div>
    );
  }
}

export default Test;