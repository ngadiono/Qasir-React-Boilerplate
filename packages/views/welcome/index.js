import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Container from './Container';

class Welcome extends Component {
	render () {
	    return (
	        <>
	            <Helmet title="Welcome in to Qasir Boilerplate" />
				      <Container/>
	        </>
	    );
	}
}

export default Welcome;
export reducer from './reducers';
