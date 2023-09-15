import React from 'react';
import './Contact.css';
import {Linkedin, Twitter, GitHub, Mail} from 'react-feather';
// import Contact_page from '../Contact/Contact';

function Contact ({onRouteChange}) {
	return (
	    <div>
	        <h1 style={{ textDecoration:'underline overline 6px solid grey'}} className='Contact tc f2 b mt5'>CONTACT</h1>
	        <p className='contact_content'>Feel free to&nbsp;<a href='mailto:stephrex602@gmail.com'>email me</a> </p>
	        <p className='contact_content'>If you have any questions or wish to explore potential collaboration opportunities,<br/>
	           please kindly complete the form provided below. 
	        </p> 
	    	<form action="https://formsubmit.co/stephrex602@gmail.com" method="POST" style={{ backgroundColor:'rgba(0,20,50,0.9)', width: '30rem'}} className="contact_form br3 ba  b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
				{/*<input type="hidden" name="_next" value={Contact_page}/>*/}
				<input type="hidden" name="_captcha" value="false"/>
				<main className="pa4 white-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				           placeholder = 'NAME'
				           className="form_input white pa2 input-reset ba b--white bg-transparent hover-bg-black w-200" 
				           type="name"
				           name="name"  
				           id="name"
				           required
				        />
				      </div>
				       <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				           placeholder = 'EMAIL'
				           className="form_input white pa2 input-reset ba b--white bg-transparent hover-bg-black  w-100" 
				           type="email" 
				           name="email"  
				           id="email-address"
				           required
				        />
				       </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Message</label>
				        <textarea 
				           placeholder = 'YOUR MESSAGE'
				           className="form_input white pa2 input-reset ba b--white bg-transparent hover-bg-black w-100" 
				           type="message" 
				           name="message"  
				           id="message"
				           required
				        />
				      </div>
				    </fieldset>
				    <div className="tc">
				      <input
				        className=" white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
				        type="submit" 
				        value="Submit"
				      />
				    </div>
				  </div>
				</main>
			</form>
			<div className='graphicons'>
	            <div className='graphicon_i'><a href='https://www.linkedin.com/in/opeyemi-oloyede-488aa925a' ><Linkedin color='rgb(0,100,190)' size={30}/></a></div>
	            <div className='graphicon_i'><a href='https://twitter.com/stephz602' ><Twitter color='rgb(0,100,190)' size={30}/></a></div>
	            <div className='graphicon_i'><a href='https://github.com/stephrex' ><GitHub color='rgb(255,255,255)' size={30}/></a></div>
	            <div className='graphicon_i'><a href='mailto:stephrex602@gmail.com' ><Mail color='rgb(220,20,20)' size={30}/></a></div>
            </div>
	    </div>
	)
}

export default Contact;