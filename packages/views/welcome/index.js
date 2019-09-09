import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Container from './Container';

class Welcome extends Component {	
	render () {
	    return (
	        <div>
	            <Helmet title="Welcome in to Qasir Boilerplate" />
				<Container/>				
	        </div>
	    );
	}
}

export default Welcome;
export reducer from './reducers';
