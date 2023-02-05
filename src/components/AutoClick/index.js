import React, { Component } from 'react';
import { format, addSeconds } from 'date-fns';
import PropTypes from 'prop-types';
import styles from './AutoClick.module.scss';
class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      timeTimerAutoClick: new Date(0, 0, 0, 0, 0, 0, 0)
    };
    this.intervalId = null;
    this.intervalTimer = null;
  }


  tick = () => {
    this.setState((state, props) => {
      return { time: addSeconds(state.time, props.step), };
    });
  };

  tickTimerAutoClick = () => {
    this.setState((state, props) => {
      if (state.timeTimerAutoClick.getSeconds() < props.timeRunAutoClick) {
        return { timeTimerAutoClick: addSeconds(state.timeTimerAutoClick, 1) };
      }
      this.stop();

    });
  };

  startTimerAutoClick = () => {
    this.setState((state, props) => {
      if (this.intervalTimer === null) {
        this.intervalTimer = setInterval(this.tickTimerAutoClick, 1000)
      }
    });
  };


  start = () => {
    this.startTimerAutoClick();
    this.setState((state, props) => {
      if (this.intervalId === null) {
        this.intervalId = setInterval(this.tick, props.interval * 1000)
      }

    });
  };

  stop = () => {
    clearInterval(this.intervalId);
    clearInterval(this.intervalTimer);
    this.intervalTimer = null;
    this.intervalId = null;

  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0), timeTimerAutoClick: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.interval === this.props.interval;
  }
  render() {
    console.log('render run');

    const { time } = this.state;
    const { timeTimerAutoClick } = this.state;

    return (
      <section className={styles.main}>
        <h1>It is AUTOCLICK value!!!!</h1>
        <h2>{format(time, 'HHmmss')}</h2>
        <h2>AutoClick run {format(timeTimerAutoClick, 'HH:mm:ss')}  time</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </section>
    )
  }
}
AutoClick.propTypes={
  step:PropTypes.number.isRequired,
  interval:PropTypes.number.isRequired,
  timeRunAutoClick:PropTypes.number.isRequired
  };
  AutoClick.defaultProps={
    step:1,
    interval:1,
    timeRunAutoClick:30
  };
export default AutoClick;
