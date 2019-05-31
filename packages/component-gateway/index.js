import React from 'react'
import {connect} from 'react-redux'
// import {setShowMenuState} from '@qasir/crm-menu/reducers'
import {push} from 'react-router-redux'
import Auth from '@qasir/auth'
import {dumpDataUser} from '@qasir/auth/reducers'

const mapStateToProps = ({routing, security}) => {
    return {
        currentURL: routing.location != null ? routing.location.pathname : "/",
        clientSecretKey: security.clientSecret,
        currentPathName: routing.location != null ? routing.location.pathname : "/"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

class ComponentGateway extends React.Component {
    componentDidMount() {
        const {dispatch, currentPathName} = this.props
        const auth = new Auth
        const header = auth.headerLogin()
        if (!header["Authorization"] || header["Authorization"] == "") {
            dispatch(push("/login"))
        } else {
            const hrefLocation = window.location.href
            const arr = hrefLocation.match(/\/#\/(.*)/g) 
            const currentUrlPath = arr[0]
            dispatch(setShowMenuState(true))
            dispatch(dumpDataUser())
            if (currentUrlPath != "/#/") {
                dispatch(push(currentUrlPath.replace("/#", "")))
            } else {
                dispatch(push("/dashboard"))
            }
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ComponentGateway)
export WrappingComponent from './wrappingComponent'
import React from 'react'
import {connect} from 'react-redux'
import {setShowMenuState} from '@qasir/crm-menu/reducers'
import {push} from 'react-router-redux'
import Auth from '@qasir/auth'
import {dumpDataUser} from '@qasir/auth/reducers'

const mapStateToProps = ({routing, security}) => {
    return {
        currentURL: routing.location != null ? routing.location.pathname : "/",
        clientSecretKey: security.clientSecret,
        currentPathName: routing.location != null ? routing.location.pathname : "/"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

class ComponentGateway extends React.Component {
    componentDidMount() {
        const {dispatch, currentPathName} = this.props
        const auth = new Auth
        const header = auth.headerLogin()
        if (!header["Authorization"] || header["Authorization"] == "") {
            dispatch(push("/login"))
        } else {
            const hrefLocation = window.location.href
            const arr = hrefLocation.match(/\/#\/(.*)/g) 
            const currentUrlPath = arr[0]
            dispatch(setShowMenuState(true))
            dispatch(dumpDataUser())
            if (currentUrlPath != "/#/") {
                dispatch(push(currentUrlPath.replace("/#", "")))
            } else {
                dispatch(push("/dashboard"))
            }
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ComponentGateway)
export WrappingComponent from './wrappingComponent'
