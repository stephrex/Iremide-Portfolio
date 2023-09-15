import React from 'react';
import './Now.css'
// import Now from '.././Now/Now';
// import IremidePic from '../Home/Iremide.jpg';


const Now = ({onRouteChange}) => {
	return (
    	<div>
    		<h1 className='b f1 mt4 now_heading'>Now</h1>
    		<p className='now_content' style={{marginTop: '5px', marginBottom: '28px'}}>What I'm working on currently</p>
    		<p className='now_content' style={{color: 'rgba(255, 255, 255, 1.0)', fontSize: '1.2rem', marginTop: '3px',marginBottom: '70px'}}>Last Update: September 15 2023</p>
    		<h6 className='now_heading2 b f2 mt4'>Enhancing Python Skills for Machine Learning</h6>

			<p className='now_content'>I am passionately dedicated to honing my Python programming abilities, 
			   particularly in the context of machine learning. 
			   To achieve this, I have embarked on an enriching journey with the book "Python for Data Analysis" authored by Wes McKinney.
			</p>

			<h6 className='now_heading2 b f3 mt4'>Key Activities and Achievements:</h6>

			<p className='now_content'>Book Study: My current endeavor involves an in-depth study of "Python for Data Analysis," a renowned resource in the field. 
			   Through diligent reading and practical exercises, I am strengthening my foundation in Python programming.
			</p>

			<p className='now_content'>Data Analysis Proficiency: This learning process has allowed me to grasp essential concepts related to data manipulation, 
			   visualization, and analysis using Python. I have gained valuable insights into pandas, NumPy, and other data science libraries.
			</p>

			<p className='now_content'>Machine Learning Aspiration: My ultimate goal is to leverage my improved Python skills to delve deeper into 
			   machine learning. I am excited about the prospect of developing predictive models, exploring algorithms,
			   and contributing to the exciting field of artificial intelligence.
			</p>

			<p className='now_content'>By immersing myself in this educational journey, I am poised to not only bolster my technical prowess
			   but also to contribute to the rapidly evolving world of data science and machine learning.
			</p>
		</div>
	);
}

export default Now;