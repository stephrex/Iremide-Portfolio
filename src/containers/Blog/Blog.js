import React, { useState, useEffect } from 'react';
import './Blog.css';
import DivingIntoAIWonderland from './Diving into the AI wonderland.webp';
import JourneyToAzureAI from './journey to azure ai.webp';
import MasteringMachineLearning from './mastering machine learning.webp';
import OverfittingAndUnderFitting from './overfitting and underfitting overview.webp';

const Blog = () => {
	const blogPosts = [
		{
			title: "Diving into the AI Wonderland: A No-Nonsense Guide",
			publishedDate: '2023-11-16 10:36:15',
			imageUrl: DivingIntoAIWonderland,
			postUrl: "https://medium.com/gopenai/diving-into-the-ai-wonderland-a-no-nonsense-guide-b317d013e75c"
		},
		{
			title: "Understanding Overfitting and Underfitting in Machine Learning",
			publishedDate: "2023-11-03 13:14:27",
			imageUrl: OverfittingAndUnderFitting,
			postUrl: 'https://medium.com/@stephrex602_25261/understanding-overfitting-and-underfitting-in-machine-learning-5c64b9532e40'
		},
		{
			title: "Mastering Machine Learning: From Data to Deployment Simplified",
			publishedDate: "2023-10-27 12:14:59",
			imageUrl: MasteringMachineLearning,
			postUrl: 'https://medium.com/gopenai/mastering-machine-learning-from-data-to-deployment-simplified-038751b63303'
		},
		{
			title: "Journey to Azure AI Certification: How to Pass the Microsoft Azure AI Fundamentals Exam",
			publishedDate: '2023-10-25 10:34:39',
			imageUrl: JourneyToAzureAI,
			postUrl: "https://medium.com/@stephrex602_25261/journey-to-azure-ai-certification-how-i-passed-the-microsoft-azure-ai-fundamentals-exam-21201c8e2e73?source=rss-16cc10e63155------2"
		}]

	return (
		<div className="blog-container">
			{blogPosts.map((post, index) => (
				<div key={index} className='blog_card_wrapper'>
					<a href={post.postUrl} className='blog-link' target='_blank' rel='noopener norferrer'>
						<div className="blog-card">
							<img src={post.imageUrl} alt={post.title} className="blog-image" />
							<div className="blog-info">
								<h2 className="blog-title">{post.title}</h2>
								<p className="blog-published-date">Published on: {post.publishedDate}</p>
							</div>
						</div>
					</a>
				</div>
			))}
		</div>
	);
}

export default Blog;
