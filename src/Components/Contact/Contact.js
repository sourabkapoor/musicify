import React from 'react';
import f from './f.png';
import g from './g.png';
import t from './t.png';
import CForm from '../ContactForm/ContactForm';

const Contact = () => {
	return(
		<div className='grid h6 white'>
			<h1>Contact Us</h1>
			<hr className='w-30'/>
			<br/>
			<div className='flex justify-around'>
				<div className="w-30 pa3 mr2">
					<p>Facebook</p>
					<a href='https://www.facebook.com/'><img src={f} alt='img'  height='70' width='auto'/></a>
				</div>
				<div className="w-30 pa3 mr2">
					<p>Email</p>
					<a href='https://www.gmail.com/'><img src={g} alt='img' height='60' width='auto'/></a>
				</div>
				<div className="w-30 pa3 mr2">
					<p>Twitter</p>
					<a href='https://www.twitter.com/'><img src={t} alt='img' height='60' width='auto'/></a>
				</div>
			</div>
			<div className='flex'>
				<h2 className='center'>Or</h2>
			</div>
			<CForm/>
			<br/><br/><br/>
			<div className='flex'>
				<h4 className='center'>Made with love by Sourab</h4>
			</div>
		</div>
	);
}

export default Contact;