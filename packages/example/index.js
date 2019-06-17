import React from 'react';
import Helmet from 'react-helmet';
import Container from './Container';

class Example extends React.Component {	
	render () {
	    return (
	        <div>
	            <Helmet title="Example page" />
				<Container/>				
	        </div>
	    );
	}
}

export default Example;
export reducer from './reducers';
