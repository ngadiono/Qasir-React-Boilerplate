import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {history, store} from '@qasir/store';
import Routes from '@qasir/routes';

let contentBuffer = {
    pathName: null,
    content: null,
};

class Application extends Component {
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

    shouldComponentUpdate() {
        return true
    }

    render() {
        return (
            <Routes />
        )
    }
}

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>            
            <Application/>            
        </ConnectedRouter>
    </Provider>, 
document.getElementById('application'));