import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Routes from '@qasir/routes';
import StyleReset from '@qasir/styles/reset';

const GlobalStyle = createGlobalStyle`
  ${StyleReset}`;

class Application extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Routes />
            </React.Fragment>
        )
    }
}

export default Application;
