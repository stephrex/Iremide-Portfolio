import React from 'react';
import './About.css';

const About = ({ onRouteChange }) => {
	return (
		<div>
			<h1
				className='b f1 mt4 about_heading'>
				A
				<span
					style={{ display: 'flex', justifyContent: 'left', textDecoration: 'underline solid 4px  grey', textUnderlineOffset: '0.1em', fontFamily: 'Cordova' }}>
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
					on the tech world; but I actively contribute to it. <br />
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
				<h4 className='skill'>Skills</h4>
				<h5 className='skill_2'>Data Engineering</h5>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>As a Data Engineer, I specialize in unlocking the power of data to drive business success.</p>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>With strong analytical skills and expertise in managing large datasets, I excel at building systems that enable seamless data collection and utilization.</p>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}> By crafting robust data pipelines, I empower organizations to extract valuable insights and make informed decisions, ultimately driving growth and innovation.</p>
				<p className='about_content skill_content'>With a passion for leveraging data to drive results, I am poised to deliver impactful solutions that propel businesses forward</p>
				<h5 className='skill_2'>AI Model Development</h5>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>I specialize in crafting advanced model architectures for diverse machine learning tasks, including computer vision, natural language processing, anomaly detection, and more. </p>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>Proficient in TensorFlow and PyTorch, I excel in designing CNNs, LSTMs, and dense layers to deliver high-performance solutions.</p>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>My expertise drives innovation and enables businesses to leverage machine learning effectively.</p>
				<p className='about_content skill_content'> With a proven track record of success, I offer invaluable expertise to organizations seeking to harness the power of AI for competitive advantage.</p>
				<h5 className='skill_2'>Model Evaluation Expertise</h5>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>As an experienced Machine Learning Engineer, I specialize in meticulously evaluating machine learning models prior to deployment.</p>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>
					Leveraging my statistical and analytical skills, I meticulously address potential issues within models, ensuring their readiness for deployment.
				</p>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}> By conducting thorough assessments, I facilitate the deployment of flawless models that deliver optimal performance and actionable insights.</p>
				<p className='about_content skill_content'>My commitment to precision and quality assurance enables organizations to deploy models with confidence, driving success and maximizing impact.</p>
				<h5 className='skill_2'>Computer Vision Expertise</h5>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>As a seasoned expert in Computer Vision, I excel in constructing advanced models for a range of tasks, including image classification, object detection, and semantic segmentation. </p>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>Through in-depth study and hands-on experience in the field of computer vision, I have honed my skills to develop state-of-the-art models tailored to specific vision tasks. </p>
				<p className='about_content skill_content'> My proficiency enables me to leverage cutting-edge techniques and methodologies to deliver robust solutions that meet the diverse needs of computer vision applications. </p>
				<h5 className='skill_2'>Natural Language Processing Expertise</h5>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>As an accomplished NLP Expert, I specialize in constructing advanced models for a wide array of NLP tasks, including chatbots, sequence classification, and other NLP applications.</p>
				<p className='about_content skill_content'>My proficiency enables me to leverage cutting-edge algorithms and frameworks to create tailored solutions that address specific linguistic challenges and drive innovation in NLP applications.</p>
				<h5 className='skill_2'>Model Deployment</h5>
				<p className='about_content skill_content' style={{ marginBottom: '14px' }}>In addition to model construction, I excel in deploying AI models for production environments, whether to cloud platforms or mobile devices, tailored to specific use cases.</p>
				<p className='about_content skill_content' style={{ marginBottom: '54px' }}>Leveraging my expertise in cloud technologies such as AWS, GCP, and Azure, I ensure seamless deployment and scalability of models, enabling organizations to harness the full potential of AI solutions. </p>
				<p className='about_content' style={{ fontFamily: 'Georgia' }}>I'm excited to connect and discuss opportunities. Feel free to reach out through any of the following channels below</p>
			</div>
		</div>
	)
}

export default About;