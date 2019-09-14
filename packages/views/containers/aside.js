import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Aside extends Component {

  constructor(props) {
    super(props);

    this.eventToggle = this.eventToggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  eventToggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <p>aside</p>
    );
  }

}

Aside.propTypes = {};
Aside.defaultProps = {};

export default Aside;
