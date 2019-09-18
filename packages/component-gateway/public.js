import React from 'react';
import { connect } from 'react-redux';

class ComponentGatewayPublic extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ routing, security }, ownProps) => {
    return {
        currentURL: routing.location != null ? routing.location.pathname : "/",
        clientSecretKey: security.clientSecret
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentGatewayPublic);
