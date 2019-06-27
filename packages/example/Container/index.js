import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';

import './style.scss';

class Container extends Component {    
    render() {
        return (
            <div className="App">
                <Helmet title="Example page" />
                <Header />
                <div className="App-header">
                    <img src="https://www.qasir.id/images/revamp-new-img/Qasir-White.svg" className="App-logo" alt="logo" />
                    <p>
                    Qasir's Frontend (ReactJS Seed) has been designed to provide you with a super fast test driven front-end development lifecycle.
                    </p>
                    <a
                    className="App-link"
                    href="https://qasir-id.atlassian.net/wiki/spaces/WTH/pages/28835892/QM+-+Frontend+Documentation"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn More
                    </a>
                </div>
            </div>
        )
    }
}

export default Container;