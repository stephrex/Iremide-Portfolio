import React,{ Component } from 'react';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Now from './containers/Now/Now';
import Blog from './containers/Blog/Blog';
// import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navbar/Navbar';
import 'tachyons';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      route: 'home'
    }
  }
  
  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render () {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} route = {this.state.route}/>
        {this.state.route === 'home' ? 
          <Home onRouteChange={this.onRouteChange}/>
        : (
          this.state.route === 'about'
          ? <About onRouteChange={this.onRouteChange}/> 
          : (
            this.state.route === 'contact'
            ? <Contact onRouteChange={this.onRouteChange}/>
            : (
              this.state.route === 'now'
              ? <Now onRouteChange = {this.onRouteChange}/>
              : <Blog onRouteChange = {this.onRouteChange}/>
              )
            )
          )
        }
      </div>
    )
  }
}

export default App;
