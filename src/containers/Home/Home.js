import React from 'react';
import IremidePic from './iremidepic.com-crop.jpg';
import './Home.css';
// import Navigation from '../../components/Navigation/Navigation';

const Home = ({onRouteChange}) => {
	
	const onButtonClick = () => {
      onRouteChange('about');
	}

	return (
	    <div>
	        {/*<Navigation onRouteChange={this.onRouteChange}/>*/}
	        <div className='mainBody'>
		        <div>
			    	<div className="pa4 image">
					    <img alt='Pic Of Iremide' className="br-100 h5 w5 dib tc"src={IremidePic}/>
				    </div>
			    </div>
				<div className='tl'>
				    <h1 className="f1 tl name tc b">Iremide Oloyede </h1> 
				    <h6 className="f3 tc status"> </h6>
				    <div className=" tc">
					    <button className="explore f5 b" onClick={onButtonClick}>Explore</button>
				    </div>
		        </div>
		    </div>
	    </div>
	)
}

export default Home;