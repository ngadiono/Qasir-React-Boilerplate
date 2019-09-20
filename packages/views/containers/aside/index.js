import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
      <div style={{ background: 'green', display: 'block', height: 400, color: 'white', float: 'left', width: 200 }}>
        <h4>aside</h4>
        <ul>
            <li>
              <a href="#/dashboard">
              dashboard
              </a>
            </li>
            <li>
              <a href="#/user-management">
              user
              </a>
            </li>
            <li>
              <a href="#/login">
              login
              </a>
            </li>
          </ul>
      </div>
    );
  }

}

Aside.propTypes = {};
Aside.defaultProps = {};

export default Aside;
