import React, { PureComponent } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  startClock,
  serverRenderClock,
  incrementCount,
  decrementCount,
  resetCount,
} from 'modules/example-redux/actions';

const pad = (n) => (n < 10 ? `0${n}` : n);

const format = (t) => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const Clock = ({ lastUpdate, light }) => (
  <div className={light ? 'light' : ''}>
    {format(new Date(lastUpdate))}
    <style jsx>{`
      div {
        padding: 15px;
        display: inline-block;
        color: #82fa58;
        font: 50px menlo, monaco, monospace;
        background-color: #000;
      }
      .light {
        background-color: #999;
      }
    `}</style>
  </div>
);

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
};

const Examples = () => {
  const lastUpdate = useSelector((state) => state.timer.lastUpdate);
  const light = useSelector((state) => state.timer.light);

  return (
    <div style={{ marginBottom: 10 }}>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  );
};

class Index extends PureComponent {
  // static getInitialProps({ store, req }) {
  //   store.dispatch(serverRenderClock(!!req));

  //   return {};
  // }

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Examples />;
  }
}

const mapDispatchToProps = {
  startClock,
};

export default connect(null, mapDispatchToProps)(Index);
