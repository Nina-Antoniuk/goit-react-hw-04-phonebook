import { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    step: 2,
  };

  decrement = () => {
    return this.setState(prevState => ({
      count: prevState.count - prevState.step,
    }));
  };

  increment = () => {
    return this.setState(prevState => ({
      count: prevState.count + prevState.step,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <p>{this.state.count}</p>
        <button type="button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
