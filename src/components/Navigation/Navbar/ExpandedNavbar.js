import React, { useEffect } from 'react';
import './ExpandedNavbar.css';
import Contact from '../../.././containers/Contact/Contact';
import About from '../../.././containers/About/About';
import Now from '../../.././containers/Now/Now';
import Blog from '../../.././containers/Blog/Blog';
import Footer from '../../Footer/Footer';

const ExpandedNavbar = ({ onRouteChange, route }) => {

	const onAboutButtonClick = () => {
		onRouteChange('about');
	}
	const onBlogButtonClick = () => {
		onRouteChange('blog');
	}
	const onNowButtonClick = () => {
		onRouteChange('now');
	}
	const onNavButtonClick = () => {
		onRouteChange('nav_expanded');
	}
	const scrollToFooter = () => {
		const footer = document.getElementById('footer');
		footer.scrollIntoView({ behavior: 'smooth' });
	};
	const onContactButtonClick = () => {
		onRouteChange('about');
		scrollToFooter();
	};

	return (
		<div className="navigation-menu3 expanded3">
			<ul>
				<li onClick={onAboutButtonClick}>
					<a href={About} className="dim grow">About</a>
				</li>
				<li onClick={onBlogButtonClick}>
					<a href={Blog} className="dim grow">Blog</a>
				</li>
				<li onClick={onNowButtonClick}>
					{/*This links to the now page, which talks about what I am doing now*/}
					<a href={Now} className="dim grow">Now</a>
				</li>
			</ul>
		</div>
	);
}

export default ExpandedNavbar;