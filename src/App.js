import React, { useState, Component } from 'react';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Now from './containers/Now/Now';
import Blog from './containers/Blog/Blog';
import ExpandedNavbar from './components/Navigation/Navbar/ExpandedNavbar';
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navbar/Navbar';
import 'tachyons';

function App() {
  const [route, setRoute] = useState('about');

  const onRouteChange = (route) => {
    setRoute(route)
  }
  return (
    <div className="App">
      <div className='nav_bar' style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        {(route === 'nav_expanded') ? (
          <ExpandedNavbar onRouteChange={onRouteChange} />
        ) : <Navigation onRouteChange={onRouteChange} route={route} />}
      </div>
      {route === 'about' && (
        <About onRouteChange={onRouteChange} />
      )}
      {route === 'contact' && (
        <Contact onRouteChange={onRouteChange} />
      )}
      {route === 'now' && (
        <Now onRouteChange={onRouteChange} />
      )}
      {route === 'blog' && (
        <Blog onRouteChange={onRouteChange} />
      )}
      <Footer />
    </div >
  )
}

export default App;
