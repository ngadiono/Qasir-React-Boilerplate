import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Page500 extends Component {
  render() {
    return (
      <>
        <Helmet title="500 Internal Server Error - Qasir Supplier" />
        <p>Internal Server Error</p>
      </>
    );
  }
}

export default Page500;
