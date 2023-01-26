import React, { Component } from 'react';
import AutoClick from '../AutoClick';
import Counter from '../Counter';
import styles from './CounterSection.module.css';

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, interval:0 }
  }
  inputHandler = ({ target }) => {
    if (target.value >= 1 && target.value <= 1000000)
      this.setState({ step: target.value });
  }
  inputHandlerIntevalAutoClik = ({ target }) => {
    if (target.value >= 1 && target.value <= 1000000)
      this.setState({ interval: target.value });
  }
  render() {
    const { step } = this.state;
    const { interval} = this.state;


    return (

      <section className={styles.main}>
        <p className={styles.paragraph}>step value range 1-1000000!!!</p>
        <AutoClick step={step} interval={interval}/>
        <p>interval AutoClick in seconds:{interval}</p>
        <label> Enter interval: <input type="text" value={interval} onChange={this.inputHandlerIntevalAutoClik} name="interval"  placeholder="Enter step" /></label>
        <p>step:{step}</p>
        <label>Enter step: <input type="text" value={step} onChange={this.inputHandler} name="step" placeholder="Enter step" /></label>
        <Counter step={step} />
      </section>)
  }
}

export default CounterSection;
