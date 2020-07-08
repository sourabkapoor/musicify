import React from 'react';
import './Test.css';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


class Test extends React.Component {
	render() {
		return(
			<div className='flex mt6'>
				<div className='center try ma3 vh-75 w-30'>
					<div className='center try1 ma1 h4 w4'>
					</div>
					<h4 className='white'>Track Title Here</h4>
					<p className='white'>Artist Name</p>
					<br/>
					<div><hr width='50%'/></div>
					<br/>
					<div className='justify-between'>
						<span className='flex-start ma2'>
							<SkipPreviousIcon fontSize='large'/>
						</span>
						<span className='center ma2'>
							<PlayArrowIcon fontSize='large'/>
						</span>
						<span className='flex-end ma2'>
							<SkipNextIcon fontSize='large'/>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Test;