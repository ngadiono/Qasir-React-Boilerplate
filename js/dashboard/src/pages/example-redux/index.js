import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { startClock, serverRenderClock } from 'modules/example-redux/state/actions';
import Examples from '../components/examples';

class Index extends PureComponent {
  static getInitialProps({ store, req }) {
    store.dispatch(serverRenderClock(!!req));

    return {};
  }

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <Examples />
      </>
    );
  }
}

const mapDispatchToProps = {
  startClock,
};

export default connect(null, mapDispatchToProps)(Index);
