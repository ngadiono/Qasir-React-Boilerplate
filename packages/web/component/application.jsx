import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Routes from '@qasir/routes';
import StyleReset from '@qasir/styles/reset';

const GlobalStyle = createGlobalStyle`
  ${StyleReset}`

let contentBuffer = {
    pathName: null,
    content: null,
}

class Application extends React.Component {
    static childContextTypes = {
        getContentBuffer: PropTypes.func,
        setContentBuffer: PropTypes.func,
    }

    getChildContext() {
        return {
            getContentBuffer: () => contentBuffer,
            setContentBuffer: ({ pathName, content }) => (contentBuffer = { pathName, content }),
        }
    }

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
