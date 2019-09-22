import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Routes from '@qasir/routes';
import StyleReset from '@qasir/styles/reset';

const GlobalStyle = createGlobalStyle`
  ${StyleReset}`

class Application extends React.Component {
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
