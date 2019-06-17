import React from 'react'
import PropTypes from 'prop-types'
// import {BackTop, Layout as AntLayout} from 'antd'
import {ContainerQuery} from 'react-container-query'
import classNames from 'classnames'
// import Menu from '@qasir/crm-menu'
// import TopBar from '@qasir/crm-topbar'
import Content from '@qasir/app-content'

// const AntContent = AntLayout.Content
// const AntHeader = AntLayout.Header
// const AntFooter = AntLayout.Footer

const query = {
    'screen-xs': {
        maxWidth: 575
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199
    },
    'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599
    },
    'screen-xxl': {
        minWidth: 1600
    }
}

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
            <ContainerQuery query={query}>
                {params => (
                    <div className={classNames(params)}>
                        <Content />
                    </div>
                )}
            </ContainerQuery>
        )
    }
}

export default Application