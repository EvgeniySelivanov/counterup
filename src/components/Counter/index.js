import React, { Component } from 'react';
import styles from './Counter.module.css';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isAdd: true };

  }
  clickHandler = () => {

    this.setState((state, props) => {
      const { isAdd } = state;
      return isAdd ? { count: state.count + Number(props.step) } : { count: state.count - Number(props.step) }
    });
  }



changeHandler = () => {
  this.setState({ isAdd: !this.state.isAdd })

}
render() {
  const { count, isAdd } = this.state;
  const value = isAdd ? 'Add' : 'Sub';

  return (
    <section>
      <p className={styles.counter}>result: {count}</p>
      <button onClick={this.clickHandler}>{value}</button>
      <button onClick={this.changeHandler}>Change mode</button>
    </section>
  );
}
}

export default Counter;
