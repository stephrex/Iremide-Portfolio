import React from 'react';
import './About.css';
import Now from '.././Now/Now';
// import IremidePic from '../Home/Iremide.jpg';


const About = ({onRouteChange}) => {

	 const onNowButtonClick = () => {
    	onRouteChange('now');
  	}
	return (
		<div>
	        {/*The h1 tag, with an underline under it*/}
	    	<h1 
	    	className='b f1 mt4 about_heading'>
			    A
			    <span 
			    style={{display:'flex', justifyContent: 'left', textDecoration: 'underline solid 4px  grey', textUnderlineOffset:'0.1em', fontFamily: 'Cordova' }}>
				    BOU
			    </span>
			    T
		    </h1>
		    <div>
		    	<p className='about_content'>
				    I'm Iremide, a passionate technology enthusiast with a
				    relentless drive to explore the ever-evolving world of tech.
                </p>

				<p className='about_content'>
				    I combine a profound love for writing with,
				    a knack for staying updated on the latest technological trends.
				</p>
	
		        <p className='about_content'>
		        	With a background in machine learning, I am not just content with keeping up-to-date 
		        	on the tech world; but I actively contribute to it. <br/>
		        </p>

		        <p className='about_content'>
		        	I am a machine learning engineer who has a passion for crafting innovative projects, 
		        	often merging my machine learning prowess with my web development skills.
		        </p>

		        <p className='about_content'>
		        	My journey doesn't stop there; I am currently immersed in the field of mechatronics engineering, 
		        	aiming to broaden my horizons and tackle complex challenges.
		        </p>
		        <p className='about_content'>
		        	My mission goes beyond personal achievement. 
		        	I aspire to utilize the power of artificial intelligence to address pressing issues within my community. 
		        </p>
		        <p className='about_content'>
		            My commitment to leveraging technology for the greater good 
		        	exemplifies my dedication to making a positive impact on the world.
		        </p>
		        <p className='about_content'>
		        	Join me on my technology-driven adventure as I continue to write, build, and innovate, 
		        	all while working towards a brighter future where AI solutions transform lives and communities. 
		        </p>

		        <p className='about_content'>
		        	Explore my journey as I navigates the intersection of technology, engineering, and community development.
		        </p>

		        <p className='about_content'>
		            Here's what i'm up to&nbsp;<a onClick={onNowButtonClick} href={Now} className='nowClick'>now</a>.
		        </p>
		    </div>
	    </div>
	)
}

export default About;