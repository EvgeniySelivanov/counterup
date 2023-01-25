import React, { Component } from 'react';
import Counter from '../Counter';
import styles from './CounterSection.module.css';

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 }
  }
  inputHandler = ({ target }) => {
    if (target.value >= 1 && target.value <= 1000000)
      this.setState({ step: target.value });
  }
  render() {
    const { step } = this.state;

    return (

      <section className={styles.main}>
        <p className={styles.paragraph}>step value range 1-1000000!!!</p>
        <p>step:{step}</p>
        <input type="text" value={step} onChange={this.inputHandler} name="step" placeholder="Enter step" />
        <Counter step={step} />
      </section>)
  }
}

export default CounterSection;
