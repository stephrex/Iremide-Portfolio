import React from 'react';
import './ExpandedNavbar.css';
import Contact from '../../.././containers/Contact/Contact';
import Home from '../../.././containers/Home/Home';
import About from '../../.././containers/About/About';
import Now from '../../.././containers/Now/Now';
import Blog from '../../.././containers/Blog/Blog';

const ExpandedNavbar = ({onRouteChange, route}) => {

	const onAboutButtonClick = () => {
	    onRouteChange('about');
	}
	const onHomeButtonClick = () => {
	    onRouteChange('home');
	}
	const onContactButtonClick = () => {
	   onRouteChange('contact');
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

	return (
	    <div className="navigation-menu3 expanded3">
            <ul>
              <li onClick={onHomeButtonClick}>
                <a href={Home} className="dim grow">Home</a>
              </li>
              <li onClick={onAboutButtonClick}>
                <a href={About} className="dim grow">About</a>
              </li>
              <li onClick={onContactButtonClick}>
                <a href={Contact} className="dim grow">Contact</a>
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