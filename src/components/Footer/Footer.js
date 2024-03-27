import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Assuming you have a Footer.css file for styling
import IremidePic from '.././Navigation/Navbar/iremidepic.com-crop.jpg'

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="profile-pic">
            <img src={IremidePic} alt="Opeyemi Oloyede" />
          </div>
          <div className='profile-text'>
            <h2>Iremide Oloyede</h2>
            <p>Passionate Machine Learning Engineer with expertise in building AI models and deploying them for production. Let's connect and collaborate!</p>
            <a href='mailto:stephrex602@gmail.com' className="btn-contact">Contact Me</a>
          </div>
        </div>
        <div className="footer-icons">
          <a href='https://www.linkedin.com/in/opeyemi-oloyede-488aa925a' className='icon-link'><FaLinkedin className='icon' /></a>
          <a href='https://twitter.com/stephz602' className='icon-link'><FaTwitter className='icon' /></a>
          <a href='https://github.com/stephrex' className='icon-link'><FaGithub className='icon' /></a>
          <a href='mailto:stephrex602@gmail.com' className='icon-link'><FaEnvelope className='icon' /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
