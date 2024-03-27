import { useState, useEffect } from "react";
import IremidePic from './iremidepic.com-crop.jpg';
// import Contact from '../../.././containers/Contact/Contact';
import About from '../../.././containers/About/About';
import Now from '../../.././containers/Now/Now';
import Blog from '../../.././containers/Blog/Blog'
import Footer from "../../Footer/Footer";
import "./Navbar.css";

const Navbar = ({ onRouteChange, route }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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
    scrollToFooter();
  };

  useEffect(() => {
    setIsNavExpanded(false);
  }, [route]);

  return (
    <div className='sticky_nav'>
      <nav className="navigation">
        <div className="pa4">
          <img alt='Pic Of Iremide' className="br-100 dib image" src={IremidePic} />
        </div>
        <button className="hamburger" onClick={onNavButtonClick}>
          <div id="menu"></div>
          <div id="menu"></div>
          <div id="menu"></div>
        </button>
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li onClick={onAboutButtonClick}>
              <a href={About} className="dim grow">About</a>
            </li>
            <li onClick={onContactButtonClick}>
              <a href={Footer} className="dim grow">Contact</a>
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
      </nav>
    </div>
  );
}

export default Navbar;