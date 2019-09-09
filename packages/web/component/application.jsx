import React from 'react';
import PropTypes from 'prop-types';
import Routes from '@qasir/routes';

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
            <Routes />
        )
    }
}

export default Application;