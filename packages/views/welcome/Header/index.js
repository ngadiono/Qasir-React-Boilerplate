import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/* header */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ wholeSaleCart }) => {
    return {
        wholeSaleCart: wholeSaleCart.carts
    }
}

export default Header;
