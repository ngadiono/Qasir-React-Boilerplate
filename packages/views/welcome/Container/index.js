import React, { Component } from 'react';

import ButtonTest from '@qasir/components/Button';
import Header from '../Header';

import './style.scss';
import logoQasir from '../../../assets/img/logo/logo-qasir-white.svg';

class Container extends Component {    
    render() {
        return (
            <div className="app">                
                <div className="app-header">
                    <img src={logoQasir} className="app-logo" alt="logo" />
                    <p>
                    Qasir's Frontend (ReactJS Seed) has been designed to provide you with a super fast test driven front-end development lifecycle.                    
                    </p>
                    <a
                    className="app-link"
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